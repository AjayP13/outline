// @flow
import React, { Component } from 'react';
import type { Props } from '../types';
import styles from '../Editor.scss';

export default class TodoItem extends Component {
  props: Props;

  handleChange = (ev: SyntheticInputEvent) => {
    const checked = ev.target.checked;
    const { editor, node } = this.props;
    const state = editor
      .getState()
      .transform()
      .setNodeByKey(node.key, { data: { checked } })
      .apply();

    editor.onChange(state);
  };

  render() {
    const { children, checked } = this.props;

    return (
      <li contentEditable={false} className={styles.todo}>
        <input type="checkbox" checked={checked} onChange={this.handleChange} />
        {' '}
        <span contentEditable={true} suppressContentEditableWarning>
          {children}
        </span>
      </li>
    );
  }
}
