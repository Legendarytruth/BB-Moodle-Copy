import React from "react";
import { Form, Input, Button } from "antd";
import Icon from "@ant-design/icons";
import Hoc from "../hoc/hoc";

const FormItem = Form.Item;

let id = 0;

class QuestionForm extends React.Component {
  remove = k => {
    const { form } = this.props;
    const keys = form.getFieldValue("keys");
    if (keys.length === 1) return;
    form.setFieldsValue({
      keys: keys.filter(key => key !== k)
    });
  };

  add = () => {
    const { form } = this.props;
    const keys = form.getFieldValue("keys");
    const nextKeys = keys.concat(++id);
    form.setFieldsValue({
      keys: nextKeys
    });
  };

  render() {
    console.log(this.props);
    const { getFieldDecorator, getFieldValue } = this.props.form;
    getFieldDecorator("keys", { initialValue: [] });
    const keys = getFieldValue("keys");
    const formItems = keys.map((k, index) => (
      <FormItem name= {`questions[${this.props.id}]choices[${k}]`} label={index === 0 ? "Choices" : ""} key={k} validateTrigger= {["onChange", "onBlur"]} rules= {[
        {required: true, whitespace: true, message: "Please input a choice to the question"}]}>
          <Input placeholder="Answer choice" />
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            disabled={keys.length === 1}
            onClick={() => this.remove(k)}
          />
        ) : null}
      </FormItem>
    ));
    return (
      <Hoc>
        <FormItem name = {`question[${this.props.id}]`} label="Question: " validateTrigger= {["onChange", "onBlur"]} rules= {[
        {required: true, message: "Please input a question"}]}>
          <Input placeholder="Add a question" />
        </FormItem>
        <FormItem name = {`answers[${this.props.id}]`} label="Answer: " validateTrigger= {["onChange", "onBlur"]} rules= {[
        {required: true, message: "Please input an answer to this question"}]}>
          <Input placeholder="What is the answer?" />
        </FormItem>
        {formItems}
        <FormItem>
          <Button type="dashed" onClick={this.add}>
            <Icon type="plus" /> Add an answer choice
          </Button>
        </FormItem>
      </Hoc>
    );
  }
}

export default QuestionForm;