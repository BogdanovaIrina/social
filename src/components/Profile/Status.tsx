import React, {ChangeEvent} from 'react';
import s from './Status.module.css'

interface Props {
    status:string
    updateStatus: (status:string) => void
}

class Status extends React.Component<Props> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState( {
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState( {
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps:any, prevState: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }

    render () {
        return (
            <div className={s.main}>

                {!this.state.editMode && <div><span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span></div>}

                {this.state.editMode && <div><input onChange={this.onStatusChange} autoFocus={true} value={this.props.status} onBlur={this.deactivateEditMode} /></div>}

            </div>
        )
    }
}

export default Status