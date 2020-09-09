import { Component } from 'react';
import './index.scss';
import TaroCropper from '../../components/taro-cropper';
interface IndexProps {
}
interface IndexState {
    src: string;
    cutImagePath: string;
}
export default class Index extends Component<IndexProps, IndexState> {
    constructor(props: any);
    taroCropper: TaroCropper;
    catTaroCropper(node: TaroCropper): void;
    render(): JSX.Element;
}
export {};
