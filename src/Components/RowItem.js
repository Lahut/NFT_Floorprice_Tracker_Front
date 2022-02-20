
function RowItem(props) {

  return (
    <tr>
      <th>{props.key}</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
          title="Leicester City F.C."
        >
          {props.name}
        </a>{" "}
      </td>
      <td>{`${props.price} ${props.c_currency}`}</td>
      <td>1</td>
      <td>{parseFloat(props.f_currency) }</td>
    </tr>
  );
}

export default RowItem;
