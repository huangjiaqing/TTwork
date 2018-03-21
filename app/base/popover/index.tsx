import * as React from 'react'
import * as styles from './index.css'

interface Props {
  children: any,
  content?: any
}

export default class Popover extends React.Component<Props, any> {

  state = {
    visible: false
  }

  openPopover = () => {
    this.setState({
      visible: true
    })
  }

  closePopover = () => {
    this.setState({
      visible: false
    })
  }

  getChildren() {
    const { children } = this.props
    return {
      ...children,
      props: {
        ...children.props,
        onClick: this.openPopover
      }
    }
  }

  getPopoverStyle() {

  }

  getRef = (ele) => {
    
  }

  componentDidMount() {

  }

  render() {
    const { content } = this.props

    return (
      <div className={styles.popover}>
        {/* <div className={styles.body}>
          {content || ''}
        </div> */}
        <div className={styles.btn}>
          {this.getChildren()}
        </div>
      </div>
    )
  }
}