import React from 'react';
import RowItem from './RowItem'
import DropDowm from './DropDown'
function Table() {
    return (

        <div className="container">
            <DropDowm />
            <table class="table">
  <thead>
    <tr>
      <th><abbr title="Position"></abbr></th>
      <th>Name</th>
      <th><abbr title="Played">Floor price</abbr></th>
      <th><abbr title="Drawn">Quantity</abbr></th>
      <th><abbr title="Drawn">value</abbr></th>
      
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th>Net worth</th>
      <th><abbr ></abbr></th>
      <th><abbr ></abbr></th>
      <th><abbr ></abbr></th>
      <th><abbr >$$$</abbr></th>
    </tr>
  </tfoot>
  <tbody>
      <RowItem />
  </tbody>
</table>
        </div>
    );
}
export default Table;