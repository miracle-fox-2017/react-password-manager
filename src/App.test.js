import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme from 'enzyme';
import {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Addpassword from './Addpassword'
import EditPassword from './EditPassword'
import store from './store/store'


Enzyme.configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('Cek kelengkapan komponen Addpassword', () => {
  const addPasswordWrapper = shallow(<Addpassword/>, {context: {store}}).dive()

  it('Memiliki Form password', () => {
    expect(addPasswordWrapper.find('form')).toBeTruthy()
  })

  it('Memiliki 3 input field', () => {
    expect(addPasswordWrapper.find('form').find('input')).toHaveLength(3)
  })

  it('Memiliki tombol save', () => {
    expect(addPasswordWrapper.find('form').find('button').text()).toEqual('Save')
  })
})

describe('Cek Validasi password di komponen Addpassword', () => {
  const addPasswordWrapper = shallow(<Addpassword/>, {context: {store}}).dive()

  it('Input password akan update ketika nilai di input', () => {
    var pass = 'sasA23@1'
    addPasswordWrapper.find('input').at(2).simulate('change', {
      target: {
        name: "password",
        value: pass,
      }
    })
    expect(addPasswordWrapper.state().newpass.password).toBe(pass)
  })

  it('Validasi error saat password tidak ada satupun yang huruf besar', () => {
    var pass = 'akuga'
    addPasswordWrapper.find('input').at(2).simulate('change', {
      target: {
        name: "password",
        value: pass,
      }
    })

    addPasswordWrapper.find('form').at(0).simulate('submit', { preventDefault() {} })

    expect(addPasswordWrapper.find('#widgetValidasiHurufBesar').at(0).text()).toMatch(/Password harus memiliki setidaknya 1 huruf besar$/)
  })

  it('Validasi error saat password tidak ada satupun yang huruf kecil', () => {
    var pass = 'ITUAKU'

    addPasswordWrapper.find('input').at(2).simulate('change', {
      target: {
        name: "password",
        value: pass
      }
    })

    addPasswordWrapper.find('form').at(0).simulate('submit', { preventDefault() {} })

    expect(addPasswordWrapper.find('#widgetValidasiHurufKecil').at(0).text()).toMatch(/Password harus memiliki setidaknya 1 huruf kecil$/)
  })

  it('Validasi error saat password tidak ada satupun yang angka', () => {
    var pass = 'itu'

    addPasswordWrapper.find('input').at(2).simulate('change', {
      target: {
        name: "password",
        value: pass
      }
    })

    addPasswordWrapper.find('form').at(0).simulate('submit', {preventDefault() {} })

    expect(addPasswordWrapper.find('#widgetValidasiAngka').at(0).text()).toMatch(/Password harus memiliki setidaknya 1 angka$/)

  })

  it('Validasi error saat password tidak ada satupun yang spesial karakter', () => {
    var pass = 'itu'

    addPasswordWrapper.find('input').at(2).simulate('change', {
      target: {
        name: 'password',
        value: pass
      }
    })

    addPasswordWrapper.find('form').at(0).simulate('submit', {preventDefault() {}})

    expect(addPasswordWrapper.find('#widgetValidasiSpesialChar').at(0).text()).toMatch("Password harus memiliki setidaknya 1 spesial karakter(#$@!&%)")
  })

  it('Validasi error saat password kurang dari 5 digit', () => {
    var pass = 'itu'

    addPasswordWrapper.find('input').at(2).simulate('change', {
      target: {
        name: 'password',
        value: pass
      }
    })

    addPasswordWrapper.find('form').at(0).simulate('submit', {preventDefault() {}})

    expect(addPasswordWrapper.find('#widgetValidasiLength').at(0).text()).toMatch("Password harus minimal 5 karakter")
  })
})

describe('Cek kelengkapan komponen EditPassword', () => {
  const EditPasswordWrapper = shallow(<Addpassword/>, {context: {store}}).dive()

  it('Memiliki Form password', () => {
    expect(EditPasswordWrapper.find('form')).toBeTruthy()
  })

  it('Memiliki 3 input field', () => {
    expect(EditPasswordWrapper.find('form').find('input')).toHaveLength(3)
  })

  it('Memiliki tombol save', () => {
    expect(EditPasswordWrapper.find('form').find('button').text()).toEqual('Save')
  })
})

describe('Cek Validasi password di komponen EditPassword', () => {
  const EditPasswordWrapper = shallow(<Addpassword/>, {context: {store}}).dive()

  it('Input password akan update ketika nilai di input', () => {
    var pass = 'sasA23@1'
    EditPasswordWrapper.find('input').at(2).simulate('change', {
      target: {
        name: "password",
        value: pass,
      }
    })
    expect(EditPasswordWrapper.state().newpass.password).toBe(pass)
  })

  it('Validasi error saat password tidak ada satupun yang huruf besar', () => {
    var pass = 'akuga'
    EditPasswordWrapper.find('input').at(2).simulate('change', {
      target: {
        name: "password",
        value: pass,
      }
    })

    EditPasswordWrapper.find('form').at(0).simulate('submit', { preventDefault() {} })

    expect(EditPasswordWrapper.find('#widgetValidasiHurufBesar').at(0).text()).toMatch(/Password harus memiliki setidaknya 1 huruf besar$/)
  })

  it('Validasi error saat password tidak ada satupun yang huruf kecil', () => {
    var pass = 'ITUAKU'

    EditPasswordWrapper.find('input').at(2).simulate('change', {
      target: {
        name: "password",
        value: pass
      }
    })

    EditPasswordWrapper.find('form').at(0).simulate('submit', { preventDefault() {} })

    expect(EditPasswordWrapper.find('#widgetValidasiHurufKecil').at(0).text()).toMatch(/Password harus memiliki setidaknya 1 huruf kecil$/)
  })

  it('Validasi error saat password tidak ada satupun yang angka', () => {
    var pass = 'itu'

    EditPasswordWrapper.find('input').at(2).simulate('change', {
      target: {
        name: "password",
        value: pass
      }
    })

    EditPasswordWrapper.find('form').at(0).simulate('submit', {preventDefault() {} })

    expect(EditPasswordWrapper.find('#widgetValidasiAngka').at(0).text()).toMatch(/Password harus memiliki setidaknya 1 angka$/)

  })

  it('Validasi error saat password tidak ada satupun yang spesial karakter', () => {
    var pass = 'itu'

    EditPasswordWrapper.find('input').at(2).simulate('change', {
      target: {
        name: 'password',
        value: pass
      }
    })

    EditPasswordWrapper.find('form').at(0).simulate('submit', {preventDefault() {}})

    expect(EditPasswordWrapper.find('#widgetValidasiSpesialChar').at(0).text()).toMatch("Password harus memiliki setidaknya 1 spesial karakter(#$@!&%)")
  })

  it('Validasi error saat password kurang dari 5 digit', () => {
    var pass = 'itu'

    EditPasswordWrapper.find('input').at(2).simulate('change', {
      target: {
        name: 'password',
        value: pass
      }
    })

    EditPasswordWrapper.find('form').at(0).simulate('submit', {preventDefault() {}})

    expect(EditPasswordWrapper.find('#widgetValidasiLength').at(0).text()).toMatch("Password harus minimal 5 karakter")
  })
})
