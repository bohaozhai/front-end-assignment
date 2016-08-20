import ProgressBarDemoRoute from 'routes/ProgressBarDemo'

describe('(Route) ProgressBarDemo', () => {
  let _route

  beforeEach(() => {
    _route = ProgressBarDemoRoute({})
  })

  it('Should return a route configuration object', () => {
    expect(typeof(_route)).to.equal('object')
  })

  it('Configuration should contain path `demo`', () => {
    expect(_route.path).to.equal('demo')
  })

})
