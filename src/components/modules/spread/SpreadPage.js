import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import toastr from 'toastr';
import * as spreadActions from '../../../actions/spreadActions';
import ListView from '../../common/table/ListView';
import {getFieldNameAndIndexFromName, getNextDefinitionKey} from '../../../utilities/fieldName';


export class SpreadPage extends React.Component {

  state = {
    //Todo: I think is better to keep state of spread data here but you suggest i use redux so redux is it in this implementation
    saving: false
  };

  componentDidMount(){
    this.props.actions.loadSpreadDataAsync();
  }

  saveSpreadData(event) {
    event.preventDefault();

    this.setState({saving: true});

    this.props.actions.updateSpreadData(this.state.spread)
      .then(() => {
        toastr.success("Spread sheet data saved");
      })
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  onChangeSpreadHeader=(event)=>{
    const field = event.target.name;
    const value = event.target.value;

    this.props.actions.updateHeaderCell({field: field, value: value});
  }

  updateSpreadData= (event) => {
    const name = getFieldNameAndIndexFromName(event.target.name);
    const field = name[0];
    const index = name[1]-1;//need to subtract 1 because array are zero index based

    var fieldDefinition = this.props.spread.definition[field];
    let value = event.target.value;
    let cellData = {index: index, field: field};
    switch(fieldDefinition.type){
      case 'number':
        cellData.value = Number(value);
        break;
      default:
        cellData.value = value;
        break;
    }

    this.props.actions.updateSpreadCell(cellData);
  }

  addRowOrColumn = (isRowItem, columnType) =>{
    if(isRowItem){
      const spread = [...this.props.spread.data];
      var lastKey = spread[spread.length-1].__key__;
      spread.push({__key__:lastKey+1});

      this.props.actions.updateSpreadData(spread);
     }else {
      const spreadDefinition = {...this.props.spread.definition};

      const nextKey = getNextDefinitionKey(spreadDefinition);
      switch(columnType){
        case 'text':
          spreadDefinition[nextKey] = {
            type: 'string',
            label: 'TEXT'
          };
          break;
        case 'number':
          spreadDefinition[nextKey] = {
            type: 'number',
            label: 'NUMBER'
          };
          break;
      }
      this.props.actions.updateSpreadDefinition(spreadDefinition);
    }
  }

   render=()=>{
    return (this.props.spread.data && this.props.spread.definition)?(
      <ListView
      listItems={this.props.spread.data}
      spreadDefinition={this.props.spread.definition}
      onChangeSpreadData={this.updateSpreadData}
      onChangeSpreadHeader={this.onChangeSpreadHeader}
      addRowOrColumn={this.addRowOrColumn}/>
    ): 'loading..';
   }
}

function mapStateToProps(state) {
  return {
    spread: state.spreadData
  };
}

function mapDispatchToProps(dispatch) {
  return {
     actions: bindActionCreators(spreadActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpreadPage);
