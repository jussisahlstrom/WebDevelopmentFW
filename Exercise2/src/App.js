import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

  }

  addApple = () => {
this.setState ({ items: [...this.state.items, {id: 5, value :"Apples", qty: 3, unit: 'x'}] })}

addChicken = () => {
  this.setState ({ items: [...this.state.items, {id: 5, value :"Chicken Wings", qty: 10, unit: 'x'}] })}

  addNocco = () => {
    this.setState ({ items: [...this.state.items, {id: 5, value :"Nocco", qty: 5, unit: 'x'}] })}  

    addChocolate = () => {
      this.setState ({ items: [...this.state.items, {id: 5, value :"Chocolate", qty: 100, unit: 'g'}] })}

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={this.addApple}>Apples</button>
      <button onClick={this.addChicken}>Chicken</button>
      <button onClick={this.addNocco}>Nocco</button>
      <button onClick={this.addChocolate}>Chocolate</button>
    </div>
  }
}

export default App; 