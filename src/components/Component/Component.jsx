import React from "react"
import { StorageContext, Storage } from "../Storage/Storage.jsx"

class Component extends React.Component {
	render() {
		return (
			<Storage>
				<StorageContext.Consumer>
					{(context) => (
						<div>
							{context} desde Component
						</div>
					)}
				</StorageContext.Consumer>
			</Storage>
		)
	}
}

export default Component