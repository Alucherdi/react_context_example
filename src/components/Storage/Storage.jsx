import React from 'react'

const StorageContext = React.createContext()

class Storage extends React.Component {
	render() {
		return (
			<StorageContext.Provider value='Valor desde storage'>
				{this.props.children}
			</StorageContext.Provider>
		)
	}
}

export {
	Storage, StorageContext
}