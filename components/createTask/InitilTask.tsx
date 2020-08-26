import React from "react";
import { Form, Input } from "antd";

interface IInitialTask {
  getDataFoo: any;
}

const InitialTask: React.FC<IInitialTask> = ({ getDataFoo }: IInitialTask) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    getDataFoo(e.target.value);
  };

  return (
    <Form name="basic">
      <Form.Item
        name={"name"}
        label="Task Name"
        rules={[
          {
            required: true,
            message: "Please input task name!",
          },
        ]}
      >
        <Input onChange={changeHandler} />
      </Form.Item>
    </Form>
  );
};

export default InitialTask;