import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ItemCard.scss";

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
    };
  }

  goToDetail = () => {
    this.props.history.push(`/ItemDetail/${this.props.id}`);
  };

  render() {
    const {
      id,
      name,
      price,
      imgUrl,
      sale,
      shortDescription,
      showModalBoxButton,
      type,
    } = this.props;

    return (
      <div className={`ItemCard ${type}`}>
        <div className="ItemCardContainer">
          <img src={imgUrl} alt="제품의 이미지" onClick={this.goToDetail} />

          {type !== "RelatedProduct" && sale !== "0.00" && (
            <div className="saleBox">Save {sale * 100}%</div>
          )}
          {type === "ItemList" && (
            <button id={id} className="cart" onClick={showModalBoxButton}>
              <i id={id} class="fas fa-shopping-cart " onClick={showModalBoxButton} />
            </button>
          )}
          <div className="headerAndPriceContainer">
            <div className="header" onClick={this.goToDetail}>
              {name}
            </div>
            {type !== "RelatedProduct" ? (
              <div className="priceBox">
                <div className="price">
                  {type === "ItemList" && "→"}
                  {Math.floor(price - price * sale).toLocaleString("en")}원
                </div>
                <div className="originalPrice">{Math.floor(price).toLocaleString("en")}원</div>
              </div>
            ) : (
              <div className="priceBox">
                <div className="price">{Math.floor(price).toLocaleString("en")}원</div>
              </div>
            )}
          </div>
          {type === "ItemList" && <div className="description">{shortDescription}</div>}
        </div>
      </div>
    );
  }
}

export default withRouter(ItemCard);
