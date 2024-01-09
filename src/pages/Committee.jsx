
import React, { useState } from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Edit, Toolbar, Search, Page } from '@syncfusion/ej2-react-grids';

import { committeeData, committeeGrid } from '../data/dummy';
import { Header } from '../components';

const Committee = () => {
  const [gridData, setGridData] = useState(committeeData);

  const toolbarOptions = ['Search', 'Edit', 'Delete', 'Update', 'Cancel'];

  const editing = { allowDeleting: true, allowEditing: true, mode: 'Normal' };

  const handleDataSourceChanged = (args) => {
    // Update the underlying data source with the changes
    setGridData([...args.dataSource]);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Committee" />
      <GridComponent
        dataSource={gridData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
        dataSourceChanged={handleDataSourceChanged}
      >
        <ColumnsDirective>
          {committeeGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page, Edit, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Committee;

