import { App } from 'vue'

import { Button, Row, Col, Form, Input, Space, Table } from 'ant-design-vue'

const { Item: FormItem } = Form

const { Password: InputPassword } = Input

const useComponents = [Button, Row, Col, Form, Input, Space, Table]

const components = [FormItem, InputPassword]

export default {
  install(app: App): void {
    for (const component of useComponents) {
      app.use(component)
    }

    for (const component of components) {
      app.component(component.name)
    }
  }
}
