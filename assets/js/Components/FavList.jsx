import React from "react";
import { List, Icon } from "semantic-ui-react";
import "../Containers/MainPage";

function FavList(props) {
  const ListItems = props.dataf.map((arr, i) => (
    <List.Item onClick={() => props.onClick(arr.id)} key={i}>
      <List.Content>
        <List.Header as="a"><Icon name="heart" color="red" />{arr.title}</List.Header>
      </List.Content>
    </List.Item>
  ));

  return <List>{ListItems}</List>;
}

export default FavList;
