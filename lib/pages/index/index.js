import Taro from '@tarojs/taro';
import React, { Component } from 'react';
import { View, Button, Image } from '@tarojs/components';
import './index.scss';
import TaroCropper from '../../components/taro-cropper';
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.catTaroCropper = this.catTaroCropper.bind(this);
        this.state = {
            src: '',
            cutImagePath: '',
        };
    }
    catTaroCropper(node) {
        this.taroCropper = node;
    }
    render() {
        const { src, cutImagePath } = this.state;
        return (React.createElement(View, { className: 'index' },
            React.createElement(TaroCropper, { height: 1000, src: src, cropperWidth: 400, cropperHeight: 400, ref: this.catTaroCropper, 
                // themeColor={'#f00'}
                // hideFinishText
                fullScreen: true, onCut: res => {
                    this.setState({
                        cutImagePath: res
                    });
                }, hideCancelText: false, onCancel: () => {
                    Taro.showToast({
                        icon: 'none',
                        title: '点击取消'
                    });
                } }),
            React.createElement(Button, { onClick: () => {
                    Taro.chooseImage({
                        count: 1
                    })
                        .then(res => {
                        // console.log(res);
                        this.setState({
                            src: res.tempFilePaths[0]
                        });
                    });
                } }, "\u9009\u62E9\u56FE\u7247"),
            React.createElement(Button, { onClick: () => {
                    this.taroCropper && this.taroCropper.cut()
                        .then(res => {
                        this.setState({
                            cutImagePath: res.filePath
                        });
                        console.log(res);
                    })
                        .catch(err => {
                        console.log(err);
                    });
                } }, "\u88C1\u526A"),
            React.createElement(Image, { src: cutImagePath, mode: 'widthFix', style: {
                    width: Taro.pxTransform(400),
                    height: Taro.pxTransform(400)
                } })));
    }
}
//# sourceMappingURL=index.js.map