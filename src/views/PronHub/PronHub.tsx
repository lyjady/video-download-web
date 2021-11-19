import {Button, Card, Form, Input} from "antd";
import '../../style/card.scss'
import '../../style/list.scss'
import {useForm} from "antd/es/form/Form";
import {Video, VideoStatus} from "../../App";
import {useSpring, animated, useSprings} from "react-spring";
import {useState} from "react";
import axios from "axios";

export const PronHub = () => {

  const [videos, setVideos] = useState<Video[]>([])

  const [springs, api] = useSprings(videos.length, index => ({
    x: 0,
    from: {
      x: 10000
    }
  }))

  const [form] = useForm()

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
      type: 'PronHub'
    }])
  }

  const itemColor = (status: VideoStatus) => {
    if (status === 'download') {
      return '#ffa940';
    } else if (status === 'success') {
      return '#73d13d'
    } else {
      return '#f5222d'
    }
  }

  return (
    <div className={'card-container'}>
      <Card className={'card-item-1'} title={'基本信息'}>
        <Form onFinish={onFinish} form={form}>
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
        <Button type={'primary'} shape={'round'} size={'large'} block onClick={() => addItem(new Date().getSeconds().toString())}>添加</Button>
      </Card>
      <Card className={'card-item-3 list'} title={'历史记录'}>
        { springs.map(({ x }, index) => (
          <animated.div className={'list-item'} style={{ x }} key={videos[index].id}>
            <div>
              <span style={{ backgroundColor: itemColor(videos[index].status) }} className={'status'}/>
              <span>{ index + 1 }.</span>&nbsp;
              <span>{ videos[index].name }</span>
            </div>
          </animated.div>
        )) }
      </Card>
    </div>
  )
}
