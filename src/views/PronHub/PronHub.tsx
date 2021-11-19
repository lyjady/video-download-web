import {Button, Card, Form, Input} from "antd";
import '../../style/card.scss'
import '../../style/list.scss'
import {useForm} from "antd/es/form/Form";
import {Video} from "../../App";
import {useSpring, animated, useSprings} from "react-spring";
import {useState} from "react";

export const PronHub = () => {

  const [videos, setVideos] = useState<Video[]>([])

  const [springs, api] = useSprings(videos.length, index => ({x: 10000}))

  const [from] = useForm()

  const onFinish = () => {
    from.validateFields().then(value => console.log(value)).catch(reason => console.log(reason))
  }

  const addItem = () => {
    setVideos([...videos, {
      id: new Date().getMilliseconds().toString(),
      name: new Date().getSeconds().toString(),
      size: 123
    }])
    api.start(() => ({x: 0}))
  }

  return (
    <div className={'card-container'}>
      <Card className={'card-item-1'} title={'基本信息'}>
        <Form onFinish={onFinish} form={from}>
          <Form.Item name={'url'} label={'视频地址'} rules={[{ required: true, message: '请输入下载地址' }]}>
            <Input />
          </Form.Item>
          <Form.Item name={'videoName'} label={'视频名称'} rules={[{ required: true, message: '请输入视频名称' }]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type={'primary'} htmlType={'submit'} shape={'round'} size={'large'} block>下载</Button>
          </Form.Item>
        </Form>
        <Button type={'primary'} shape={'round'} size={'large'} block onClick={() => addItem()}>添加</Button>
      </Card>
      <Card className={'card-item-3 list'} title={'历史记录'}>
        { springs.map(({ x }, index) => (
          <animated.div className={'list-item'} style={{ x }} key={videos[index].id}>
            <span>{ videos[index].name }</span>
            <span>{ videos[index].size }MB</span>
          </animated.div>
        )) }
      </Card>
    </div>
  )
}
