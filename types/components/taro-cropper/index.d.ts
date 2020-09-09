import { PureComponent } from 'react';
import { CanvasContext, getImageInfo, getSystemInfoSync } from '@tarojs/taro';
import { CanvasTouch, CanvasTouchEvent } from "@tarojs/components/types/common";
interface TaroCropperComponentProps {
    cropperCanvasId: string;
    cropperCutCanvasId: string;
    width: number;
    height: number;
    cropperWidth: number;
    cropperHeight: number;
    themeColor: string;
    maxScale: number;
    fullScreen: boolean;
    src: string;
    onCut: (src: string) => void;
    onCancel: () => void;
    onFail: (err: any) => void;
    hideFinishText: boolean;
    hideCancelText: boolean;
    finishText: string;
    cancelText: string;
    fileType: 'jpg' | 'png';
    quality: number;
}
interface TaroCropperComponentState {
    scale: number;
}
declare class TaroCropperComponent extends PureComponent<TaroCropperComponentProps, TaroCropperComponentState> {
    static defaultProps: {
        width: number;
        height: number;
        cropperWidth: number;
        cropperHeight: number;
        cropperCanvasId: string;
        cropperCutCanvasId: string;
        src: string;
        themeColor: string;
        maxScale: number;
        fullScreen: boolean;
        fullScreenCss: boolean;
        hideFinishText: boolean;
        hideCancelText: boolean;
        finishText: string;
        cancelText: string;
        fileType: string;
        quality: number;
        onCancel: () => void;
        onCut: () => void;
        onFail: () => void;
    };
    systemInfo: getSystemInfoSync.Result;
    constructor(props: any);
    cropperCanvasContext: CanvasContext;
    cropperCutCanvasContext: CanvasContext;
    imageLeft: number;
    imageTop: number;
    imageLeftOrigin: number;
    imageTopOrigin: number;
    width: number;
    height: number;
    cropperWidth: number;
    cropperHeight: number;
    imageInfo: getImageInfo.SuccessCallbackResult;
    realImageWidth: number;
    realImageHeight: number;
    scaleImageWidth: number;
    scaleImageHeight: number;
    image: HTMLImageElement;
    /**
     * 根据props更新长等信息
     */
    updateInfo(props: TaroCropperComponentProps): Promise<unknown>;
    componentDidMount(): void;
    /**
     * 单位转换
     * @param value
     * @private
     */
    _getRealPx(value: number): number;
    /**
     * 绘制裁剪框的四个角
     * @private
     */
    _drawCropperCorner(): void;
    /**
     * 绘制裁剪框区域的图片
     * @param props
     * @param src               待绘制的图片路径
     * @param deviationX        图片绘制x向偏移
     * @param deviationY        图片绘制y向偏移
     * @param imageWidth        图片的原始宽度
     * @param imageHeight       图片的原始高度
     * @param drawWidth         图片的绘制宽度
     * @param drawHeight        图片的绘制高度
     * @param reverse
     * @private
     */
    _drawCropperContent(src: string | HTMLImageElement, deviationX: number, deviationY: number, imageWidth: number, imageHeight: number, drawWidth: number, drawHeight: number): void;
    update(): void;
    /**
     * 图片资源有更新则重新绘制
     * @param nextProps
     * @param nextContext
     */
    componentWillReceiveProps(nextProps: Readonly<TaroCropperComponentProps>, nextContext: any): void;
    /**
     * 图片移动边界检测
     * @param imageLeft
     * @param imageTop
     * @private
     */
    _outsideBound(imageLeft: number, imageTop: number): void;
    touch0X: number;
    touch0Y: number;
    oldDistance: number;
    oldScale: number;
    newScale: number;
    lastScaleImageWidth: number;
    lastScaleImageHeight: number;
    _oneTouchStart(touch: CanvasTouch): void;
    _twoTouchStart(touch0: CanvasTouch, touch1: CanvasTouch): void;
    _oneTouchMove(touch: CanvasTouch): void;
    _getNewScale(oldScale: number, oldDistance: number, touch0: CanvasTouch, touch1: CanvasTouch): number;
    _twoTouchMove(touch0: CanvasTouch, touch1: CanvasTouch): void;
    handleOnTouchEnd(): void;
    handleOnTouchStart(e: CanvasTouchEvent): void;
    handleOnTouchMove(e: CanvasTouchEvent): void;
    /**
     * 将当前裁剪框区域的图片导出
     */
    cut(): Promise<{
        errMsg: string;
        filePath: string;
    }>;
    render(): any;
}
export default TaroCropperComponent;
