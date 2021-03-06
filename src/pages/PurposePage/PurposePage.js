import React, { Component } from 'react';
import './PurposePage.css';
import store from '../../reducer/store';
import { Link } from 'react-router-dom';

class PurposePage extends Component {
    state = {
        card: ''
      }
    componentDidMount() {
      store.subscribe(() => {
        let globalState = store.getState();

        // 1. С помощью find найти из globalState.cardlist объект с данными по отображаемой цели
        let dataToUpdate = globalState.cardlist.find((item) => {
          return item.id == this.props.match.params.id
        })
        console.log(dataToUpdate)
        // 2. Записать его в this.state.card

        this.setState ({
          card: dataToUpdate
        })
      })

      let globalState = store.getState();
      let card = globalState.cardlist.filter(card => {
        return card.id == this.props.match.params.id
      })[0]
      this.setState({
        card : card
      })
    }
    purposeClick() {
    }
    render() { 

        return (
            <div className="purpose_items_id">
              <div className="purpose_part">
                <div className="purpose_item_text">{this.state.card.nameTarget}</div>

                <div className="purpose_item_part">
                  <div className="purpose_item">Необходимая сумма: </div>
                  <div className="purpose_item_number">{this.state.card.requiredAmount}</div>
                </div>

                <div className="purpose_item_part"> 
                  <div className="purpose_item">Срок достижения:</div>
                  <div className="purpose_item_number">{this.state.card.targetTerm}</div>
                </div>

                <div className="purpose_item_part">
                  <div className="purpose_item">Стартовая сумма: </div>
                  <div className="purpose_item_number">{this.state.card.startingAmount}</div>
                </div>

                <div className="purpose_item_part">
                  <div className="purpose_item">Процент по вкладу:</div>
                  <div className="purpose_item_number">{this.state.card.depositInterest}</div>
                  </div>

                <div className="purpose_item_part">
                  <div className="purpose_item">Сумма пополнения:</div>
                  <div className="purpose_item_number">{this.state.card.taskResult}</div>
                </div>

              </div>
          <Link to={'/purpose/edit/' + this.state.card.id} className="purpose_item_link">Редактирование цели</Link>
          <Link to={'/'} onClick={()=>this.purposeClick()} className="purpose_item-link_two">На главную</Link>
            </div>
        );
    }
}
 
export default PurposePage;