import React, { Component } from 'react';
import uuid from 'uuid';
//import $ from 'jquery';
import AddTag from './AddTag.js';
import TagList from './TagList.js';

class ResultsScreen extends Component {
  static foodData = {
    foods: ["Abaca fibre", "Agave fibre", "Almond", "Almond", "Anise", "Apple juice", "Apple", "Apple", "Apricot", "Areca nut", "Artichoke", "Asparagus", "Avocado", "Badian", "Banana", "Barley", "Barley", "Bean", "Bean", "Beef", "Beer", "Blueberry", "Bread", "Broad bean", "Broccoli", "Brussels sprout", "Buckwheat", "Butter", "Cabbage", "Cane molasses", "Cardamom", "Carob", "Carrot", "Cashew apple", "Cashew nut", "Cassava", "Cassava flour", "Cassava starch", "Cassava", "Cassava", "Castor oil", "Castor oil seed", "Cauliflower", "Cheese", "Cherry", "Chestnut", "Chick pea", "Chicken meat", "Chilly", "Chilly", "Chocolate", "Cinnamon", "Clementine", "Clove", "Cocoa bean", "Cocoa butter", "Cocoa paste", "Cocoa powder", "Coconut fibre", "Coconut oil", "Coconut", "Coconut", "Coffee", "Coffee", "Copra", "Coriander", "Coriander seed", "Cotton fabric", "Cotton lint", "Cotton linter", "Cotton seed", "Cottonseed", "Cottonseed oil", "Cowpea", "Cranberry", "Cucumber", "Currant", "Date", "Egg", "Eggplant", "Fennel", "Fig", "Flax fibre", "Fructose", "Garlic", "Garlic powder", "Gherkin", "Ginger", "Goat meat", "Gooseberry", "Gourd", "Grapefruit", "Grapefruit juice", "Grape", "Green bean", "Guava", "Hazelnut", "Hazelnut", "Hemp fibre", "Hempseed", "Hop cone", "Hop extract", "Jute", "Kiwi fruit", "Kola nut", "Lamb", "Leather from beef cattle", "Lemon", "Lentil", "Lettuce", "Lime", "Linseed", "Linseed oil", "Maize", "Maize flour", "Maize groats and meal", "Maize oil", "Maize starch", "Maize", "Malt", "Malt", "Mandarin", "Mango", "Mangosteen", "Manila fibre", "Melon seed", "Milk", "Milk powder", "Millet", "Mustard seed", "Natural rubber", "Nectarine", "Nutmeg", "Oat groats and meal", "Oats", "Oats, rolled or flaked grains", "Oil palm", "Okra", "Olive oil", "Olive oil, virgin", "Olives", "Onions, dry", "Onions, green", "Orange juice", "Oranges", "Palm kernel oil", "Palm nuts and kernels", "Palm oil", "Papayas", "Pasta, dry", "Peaches", "Peanut oil", "Peanuts in shell", "Peanuts shelled", "Pears", "Peas, dry", "Peas, green", "Peppermint", "Pigeon peas", "Pineapple juice", "Pineapples", "Pistachios", "Plantains", "Plums", "Poppy seeds", "Pork", "Potato flakes", "Potato flour and meal", "Potato starch", "Potato", "Potatoes, tapioca", "Pumpkins", "Raisin", "Ramie", "Rape oil", "Rapeseed", "Raspberries", "Rice flour", "Rice groats and meal", "Rice", "Rice, brown", "Rice, paddy", "Rye", "Rye flour", "Safflower seeds", "Sesame oil", "Sesame seed", "Sisal", "Sisal textile fibres", "Sloes", "Sorghum", "Sour cherries", "Soy milk", "Soy sauce", "Soybean flour and meals", "Soybean oil", "Soybean paste", "Soybeans", "Spinach", "Squash", "Strawberries", "Sugar beet", "Sugar, raw (beet)", "Sugar, raw (cane)", "Sugar, refined", "Sugarcane", "Sunflower seed oil", "Sunflower seeds", "Sweet potatoes", "Tangerines", "Taro", "Tea, green and black", "Tobacco", "Tofu", "Tomato juice", "Tomato juice, concentrated", "Tomato ketchup", "Tomato paste", "Tomato puree", "Tomato, dried", "Tomato", "Tomatoes, peeled", "Turnips", "Vanilla beans", "Walnuts, shelled or peeled", "Walnuts, with shell", "Watermelons", "Wheat", "Wheat bran", "Wheat flour", "Wheat gluten", "Wheat starch", "Wine (grape)", "Yam"],
    water: [22654, 6549, 16095, 8047, 8280, 1141, 6847, 822, 1287, 11165, 818, 2150, 1981, 8280, 790, 1423, 1977, 5053, 561, 15415, 298, 845, 1608, 2018, 285, 285, 3142, 5553, 280, 527, 34319, 5594, 195, 3793, 14218, 564, 1878, 2254, 1610, 2818, 24740, 9896, 285, 5060, 1604, 2750, 4177, 4325, 7365, 379, 17196, 15526, 748, 61205, 19928, 33938, 24238, 15636, 2449, 4490, 2687, 1256, 15897, 18925, 2093, 8280, 8280, 9982, 9113, 2602, 1332, 4029, 3957, 6906, 276, 353, 499, 2277, 3265, 362, 8280, 3350, 3783, 1782, 589, 2265, 353, 1657, 5521, 526, 336, 506, 675, 608, 547, 1800, 10515, 5258, 2447, 3685, 4065, 16259, 2605, 514, 23391, 10412, 17093, 642, 5874, 237, 642, 5168, 9415, 1222, 1253, 1081, 2575, 1671, 700, 1950, 2437, 748, 1800, 1800, 20388, 5184, 1020, 4745, 4478, 2809, 13748, 910, 34319, 2536, 1788, 2416, 1098, 576, 14726, 14431, 3015, 345, 272, 1018, 560, 5401, 2868, 4971, 460, 1849, 910, 7529, 2782, 3974, 922, 1979, 595, 288, 5494, 1273, 255, 11363, 1602, 2180, 2188, 5988, 1044, 1436, 1512, 287, 1436, 336, 2433, 4507, 4301, 2271, 413, 2628, 2230, 2497, 2172, 1673, 1544, 1930, 7221, 21793, 9371, 7041, 7824, 2180, 3048, 1411, 3763, 613, 2523, 4190, 572, 2145, 292, 336, 347, 132, 865, 1666, 1782, 210, 6792, 3366, 383, 748, 606, 8856, 2925, 2523, 267, 1069, 534, 855, 713, 4276, 214, 267, 195, 126505, 9280, 4918, 235, 1827, 2036, 1849, 4189, 1436, 869, 343]
  }
  
  constructor(props) {
    super(props);
    
    var tagsTemp = [];
    // Do not remove the next comment - it suppresses an expected warning
    // eslint-disable-next-line
    props.tags.map(tag => {
      tagsTemp.push({
        id: uuid.v4(),
        name: tag,
        litersPerKilo: -1
      });
    });
    
    this.state = {
      tags: tagsTemp,
      total: 0
    }
  }
  
  componentWillMount() {
    this.updateData(this.state.tags);
  }
  
  lowercaseArray(array) {
    var lower = [];
    for (var i = 0; i < array.length; i++) {
        lower.push(array[i].toLowerCase());
    }
    return lower;
  }
  
  
  checkFoodItems(imgTags, foods, vals){
    //var footprints = [];
    var total = 0;
    var nonEmpty = [];
    var count = 0;
    var lowercaseFoods = this.lowercaseArray(foods);
    for (var i = 0; i < imgTags.length; i++) {
      var checkIndex = lowercaseFoods.indexOf(imgTags[i].name);
      if (checkIndex !== -1) {
        imgTags[i].litersPerKilo = vals[checkIndex];
        total += vals[checkIndex];
        nonEmpty[count] = imgTags[i];
        count++;
      }
    }
    total = (total / nonEmpty.length).toFixed(0);
    return [nonEmpty, total];
  }
  
  updateData(tags) {
    var imgTags, total;
    [imgTags, total] = this.checkFoodItems(tags, ResultsScreen.foodData.foods, ResultsScreen.foodData.water);
    this.setState({tags: imgTags, total: total})
  }

  /* Add an item to the tag list */
  addTag = text => {
    if (text.length <= 0) {
      return;
    }
    
    let tags = this.state.tags;
    //var inArray = false;
    
    for (var i = 0; i < tags.length; i++) {
      if (text.toLowerCase() === tags[i].name.toLowerCase()) {
        alert('That food is already in the list!');
        return;
      }
    }
    
    if(ResultsScreen.foodData.foods.indexOf(text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase()) === -1){
      alert("Sorry, that food isn't in our database!");
      return;
    }
  
    tags.push({
      id: uuid.v4(),
      name: text.toLowerCase(),
      litersPerKilo: -1
    });
    this.updateData(tags);
  }
  
  /* Remove an item from the tag list */
  deleteTag = id => {
    let tags = this.state.tags.filter(tag => tag.id !== id);
    this.updateData(tags);
  }

  render() {
    if (isNaN(this.state.total)) {
      return (
        <div className="results">
          <div className="result-box">
            <h1>This meal's water footprint:</h1>
            <h2 className="total-error">We couldn't detect any food, please input some items.</h2>
          </div>
          <div className="result-box">
            <h3 className="total-fact">Tell us what you're eating to learn more!</h3>
          </div>
          <AddTag addTag={this.addTag} />
          <TagList
            tags={this.state.tags}
            deleteTag={this.deleteTag} />
        </div>
      );
    }
    else {
      return (
        <div className="results">
          <div className="result-box">
            <h1>This meal's water footprint:</h1>
            <h2 className="total">{this.state.total} liters/kg</h2>
          </div>
          <div className="result-box">
            <h3 className="total-fact">That means it took {(this.state.total / 150).toFixed(1)} bathtubs of water to make a kilogram of your meal.</h3>
          </div>
          <AddTag addTag={this.addTag} />
          <TagList
            tags={this.state.tags}
            deleteTag={this.deleteTag} />
        </div>
      );
    }
  }
}

export default ResultsScreen;
