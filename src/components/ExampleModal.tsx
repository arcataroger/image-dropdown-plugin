import { Canvas } from 'datocms-react-ui';
import {RenderModalCtx} from "datocms-plugin-sdk";

type PropTypes = {
    ctx: RenderModalCtx;
};

export const ExampleModal = ({ ctx }: PropTypes) => (
    <Canvas ctx={ctx}>
        <h1>This is an example modal.</h1>
    </Canvas>
);