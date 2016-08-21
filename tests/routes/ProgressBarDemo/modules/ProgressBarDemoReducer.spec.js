import {
  FETCH_DATA,
  CHANGE_VALUE,
  SELECT_PROGRESS_BAR,
  fetchData,
  changeProgressBarValue,
  selectProgressBar,
  default as progressBarDemoReducer
} from 'routes/ProgressBarDemo/modules/ProgressBarDemoReducer'

describe('(Redux Module) ProgressBarDemo', () => {
  it('Should export a constant FETCH_DATA.', () => {
    expect(FETCH_DATA).to.equal('FETCH_DATA')
  })

  it('Should export a constant CHANGE_VALUE.', () => {
    expect(CHANGE_VALUE).to.equal('CHANGE_VALUE')
  })


  it('Should export a constant SELECT_PROGRESS_BAR.', () => {
    expect(SELECT_PROGRESS_BAR).to.equal('SELECT_PROGRESS_BAR')
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(progressBarDemoReducer).to.be.a('function')
    })

    it('Should initialize with a state object.', () => {
      expect(progressBarDemoReducer(undefined, {})).to.be.a('object')
    })
  })

  describe('(Action Creator) fetchData', () => {
    it('Should be exported as a function.', () => {
      expect(fetchData).to.be.a('function')
    })

    it('Should return an action with type "FETCH_DATA".', () => {
      expect(fetchData()).to.have.property('type', FETCH_DATA)
    })

    it('Should assign the argument to the "data" property.', () => {
      let _data = {
        "buttons": [
          38,
          15,
          -49,
          -9
        ],
        "bars": [
          73,
          41,
          36,
          89
        ],
        "limit": 110
      };
      expect(fetchData(_data)).to.have.property('data', _data)
    })
  })

  describe('(Action Creator) changeProgressBarValue', () => {
    it('Should be exported as a function.', () => {
      expect(changeProgressBarValue).to.be.a('function')
    })

    it('Should return an action with type "CHANGE_VALUE".', () => {
      expect(changeProgressBarValue()).to.have.property('type', CHANGE_VALUE)
    })

    it('Should assign the argument to the "value" property.', () => {
      expect(changeProgressBarValue(50)).to.have.property('value', 50);
      expect(changeProgressBarValue(23)).to.have.property('value', 23);
      expect(changeProgressBarValue(-45)).to.have.property('value', -45);
      expect(changeProgressBarValue(-17)).to.have.property('value', -17);
    })
  })

  describe('(Action Creator) selectProgressBar', () => {
    it('Should be exported as a function.', () => {
      expect(selectProgressBar).to.be.a('function')
    })

    it('Should return an action with type "CHANGE_VALUE".', () => {
      expect(selectProgressBar()).to.have.property('type', SELECT_PROGRESS_BAR)
    })

    it('Should assign the argument to the "progressBarIndex" property.', () => {
      expect(selectProgressBar(0)).to.have.property('progressBarIndex', 0);
      expect(selectProgressBar(1)).to.have.property('progressBarIndex', 1);
      expect(selectProgressBar(2)).to.have.property('progressBarIndex', 2);
    })
  })

})
