import '../../style/card.scss'
import {Button, Card, Form, Input} from "antd";
import {useForm} from "antd/es/form/Form";
import {useState} from "react";
import {Video} from "../../App";
import {useSpring, animated, useSprings} from "react-spring";
import axios from "axios";

export const NineOnePron = () => {

  const [form] = useForm()

  const [videos, setVideos] = useState<Video[]>([])

  const [springs, api] = useSprings(videos.length, index => ({
    x: 0,
    from: {
      x: 10000
    }
  }))

  const onFinish = () => {
    form.validateFields().then(() => {
      const videoName = form.getFieldValue('videoName')
      const url = form.getFieldValue('url')
      axios({
        url: 'http://localhost:8888/download/pronhub',
        method: 'GET',
        params: {
          videoName,
          url
        }
      })
      addItem(videoName)
    }).catch(reason => console.log(reason))
  }

  const addItem = (videoName: string) => {
    setVideos([...videos, {
      id: new Date().getMilliseconds().toString(),
      name: videoName,
      status: 'download',
      type: '91Pron'
    }])
  }

  return (
    <div className={'card-container'}>
      <Card className={'card-item-1'} title={'基本信息'}>
        <Form onFinish={onFinish} form={form}>
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
      <Card className={'card-item-3 list'} title={'历史记录'}>
        { springs.map(({ x }, index) => (
            <animated.div className={'list-item'} style={{ x }} key={videos[index].id}>
              <span className={'status'}/>
              <span>{ videos[index].name }</span>
            </animated.div>
        )) }
      </Card>
    </div>
  )
}
