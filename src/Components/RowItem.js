
function RowItem(props) {

  return (
    <tr>
      <th></th>
      <td>
        <a
          href={props.url}
          title={props.name}
        >
          {props.name}
        </a>{" "}
      </td>
      <td>{`${props.price} ${props.c_currency}`}</td>
      <td>1</td>
      <td>{props.comma(Math.floor(props.f_currency))} {props.isUsd ? '$' : '฿'}</td>
    </tr>
  );
}

export default RowItem;
