import * as React from 'react';
import * as styles from './Board.css';
import Scrum from './Scrum';
import Stage from './Stage';
import Task from './Task';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import { preDetailTasks, doingTasks } from './data'

class Board extends React.Component {

  state = {
    preDetailTasks,
    doingTasks
  }

  changeStage = (taskId, pre, target) => {
    let task = {
      taskId: 1,
      content: '整理笔记'
    };

    const { preDetailTasks, doingTasks } = this.state;

    this.setState({
      preDetailTasks: preDetailTasks.filter(item => item.taskId !== 1),
      doingTasks: [
        ...doingTasks,
        task
      ]
    });
  }

  render() {
    const { preDetailTasks, doingTasks } = this.state

    return (
      <div className={styles.board}>
        <Scrum>
          <Stage stageName="待处理" changeStage={this.changeStage}>
            {
              preDetailTasks.map((item, idx) => (
                <Task key={idx} content={item.content}/>
              ))
            }
          </Stage>
          <Stage stageName="进行中" changeStage={this.changeStage}>
            {
              doingTasks.map((item, idx) => (
                <Task key={idx} content={item.content}/>
              ))
            }
          </Stage>
          {/* <Stage stageName="测试中"/>
          <Stage stageName="已测试"/>
          <Stage stageName="已通过"/>
          <Stage stageName="已完成"/> */}
          <Stage isCreate={true}/>
        </Scrum>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Board)