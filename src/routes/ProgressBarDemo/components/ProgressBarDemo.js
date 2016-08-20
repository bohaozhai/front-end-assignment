import React from 'react'
import {
  ProgressBar,
  DropdownButton,
  MenuItem,
  Button
} from 'react-bootstrap'
import classes from './ProgressBarDemo.scss'

class ProgressBarDemo extends React.Component {

  constructor(props) {
    super(props)
    this.initialProgressBar = this.initialProgressBar.bind(this)
    this.onButtonClickedHandler = this.onButtonClickedHandler.bind(this)
    this.onProgressBarSelectedHandler = this.onProgressBarSelectedHandler.bind(this)
  }

  static propTypes = {
    barValues: React.PropTypes.array.isRequired,
    buttonValues: React.PropTypes.array.isRequired,
    limit: React.PropTypes.number.isRequired,
    activeProgressBar: React.PropTypes.number.isRequired,
    fetchData: React.PropTypes.func.isRequired,
    changeProgressBarValue: React.PropTypes.func.isRequired,
    selectProgressBar: React.PropTypes.func.isRequired
  };

  componentWillMount() {
    this.initialProgressBar();
  };
  
  initialProgressBar() {
    const {fetchData} = this.props;
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        fetchData(JSON.parse(this.responseText));
      }
    });
    xhr.open("GET", "https://pb-api.herokuapp.com/bars");
    xhr.send(data);
  };

  onButtonClickedHandler(e) {
    const {changeProgressBarValue} = this.props
    if (parseInt(e.target.textContent)) {
      changeProgressBarValue(parseInt(e.target.textContent))
    }
  }

  onProgressBarSelectedHandler(index) {
    const {selectProgressBar} = this.props
    selectProgressBar(index)
  }

  renderBars(barValues) {
    if (barValues.length > 0) {
      return (
        barValues.map((value, index) => {
            let pct = Math.round(value / this.props.limit * 100)
            return (
              <div key={index}>
                <p>{`Progress ${index + 1}`}</p>
                <ProgressBar
                  now={(value > this.props.limit) ? this.props.limit : value}
                  label={`${pct}%`}
                  max={this.props.limit}
                  bsStyle={(value >= this.props.limit) ? 'danger' : 'info'}
                />
              </div>
            )
          }
        )
      )
    }
  }

  renderBarSelector(barValues) {
    if (barValues.length > 0) {
      return (
        <DropdownButton
          id='progress-bar-selector'
          title={`Progress ${this.props.activeProgressBar + 1}`}
          onSelect={this.onProgressBarSelectedHandler}
        >
          {this.renderBarSelectorItem(barValues)}
        </DropdownButton>
      )
    } else {
      return null
    }
  }

  renderBarSelectorItem(barValues) {
    return (
      barValues.map((value, index) => {
          return (
            <MenuItem
              key={index}
              eventKey={index}
            >{`Progress ${index + 1}`}
            </MenuItem>
          )
        }
      )
    )
  }

  renderButtons(buttonValues) {
    if (buttonValues) {
      return (
        buttonValues.map((value, index) => {
          return <Button
            key={index}
            onClick={this.onButtonClickedHandler}>{value}</Button>
        })
      )
    }
  }

  render() {
    const {barValues, buttonValues} = this.props
    return (
      <div>
        {this.renderBars(barValues)}
        {this.renderBarSelector(barValues)}
        {this.renderButtons(buttonValues)}
      </div>
    )
  }
}

export default ProgressBarDemo
