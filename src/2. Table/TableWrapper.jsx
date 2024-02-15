import React from "react";
import { Table } from "antd";

const TableWrapper = () => {
  const data = [
    {
      key: "1",
      name: "Andrew Kimwetich",
      location: "Elegeyo Marakwet County",
      language: "JavaScript",
      age: "23",
    },
    {
      key: "2",
      name: "Elvis Wanyonyi",
      location: "Bungoma",
      language: "Java",
      age: "22",
    },
    {
      key: "3",
      name: "Peter Gacheru",
      location: "Muranga",
      language: "React",
      age: "21",
    },
  ];

  const columns = [
    { title: "Name", key: "name", dataIndex: "name" },
    { title: "Location", key: "location", dataIndex: "location" },
    { title: "Language", key: "language", dataIndex: "language" },
    {
      title: "Age",
      key: "age",
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record, index) => {
        return (
          <a onClick={() => handleDeleteClick(text, record, index)}>Delete</a>
        );
      },
    },
  ];

  const handleDeleteClick = (key) => {
    alert(key);
  };

  return (
    <div>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default TableWrapper;
