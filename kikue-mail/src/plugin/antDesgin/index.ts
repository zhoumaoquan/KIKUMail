import { App } from 'vue'

import {
  Button,
  Row,
  Col,
  Form,
  Input,
  Space,
  Table,
  Typography,
  Descriptions,
  Spin,
  Modal,
  Upload,
  Tooltip
} from 'ant-design-vue'

const { Item: FormItem } = Form

const { Password: InputPassword } = Input

const { Paragraph } = Typography

const { Item: DescriptionsItem } = Descriptions

const { Dragger: UploadDragger } = Upload

const useComponents = [
  Button,
  Row,
  Col,
  Form,
  Input,
  Space,
  Table,
  Typography,
  Descriptions,
  Spin,
  Modal,
  Upload,
  Tooltip
]

const components = [
  FormItem,
  InputPassword,
  Paragraph,
  DescriptionsItem,
  UploadDragger
]

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
