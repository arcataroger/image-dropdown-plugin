import {connect, ExecuteUploadsDropdownActionCtx, Upload} from "datocms-plugin-sdk";
import "datocms-react-ui/styles.css";
import ConfigScreen from "./entrypoints/ConfigScreen";
import { render } from "./utils/render";
import {ExampleModal} from "./components/ExampleModal.tsx";

connect({
	renderConfigScreen(ctx) {
		return render(<ConfigScreen ctx={ctx} />);
	},
	uploadsDropdownActions() {
		return [{ id: "foo", label: "Open a cool modal yo", icon: "edit" }];
	},
	async executeUploadsDropdownAction(
		actionId: string,
		uploads: Upload[],
		ctx: ExecuteUploadsDropdownActionCtx
	) {
		if (actionId === "foo") {
			await ctx.openModal({
				id: "example",
				title: "Custom modal opened from an asset",
				parameters: {
					uploads: uploads,
				},
			});
		}
	},
	renderModal(modalId, ctx) {
		if(modalId === 'example') {
			return render(<ExampleModal ctx={ctx}/>)
		}
	}
});
