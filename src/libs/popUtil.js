import { MessageBox } from 'mint-ui'

export const Confirm = function (str, suc) {
  MessageBox.confirm(str).then(suc)
}
