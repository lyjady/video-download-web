import '../../style/card.scss'
import {Button, Card, Form, Input} from "antd";
import {useForm} from "antd/es/form/Form";

export const NineOnePron = () => {

  const [from] = useForm()

  const onFinish = () => {
    from.validateFields().then(value => console.log(value)).catch(reason => console.log(reason))
  }

  return (
    <div className={'card-container'}>
      <Card className={'card-item-1'} title={'基本信息'}>
        <Form onFinish={onFinish} form={from}>
          <Form.Item name={'url'} label={'索引地址'} rules={[{ required: true, message: '请输入索引地址' }]}>
            <Input />
          </Form.Item>
          <Form.Item name={'videoName'} label={'视频名称'} rules={[{ required: true, message: '请输入视频名称' }]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type={'primary'} htmlType={'submit'} shape={'round'} size={'large'} block>下载</Button>
          </Form.Item>
        </Form>
      </Card>
      <Card className={'card-item-3'} title={'历史记录'}>
        <p>22222</p>
      </Card>
    </div>
  )
}
