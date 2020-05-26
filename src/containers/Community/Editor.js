import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { sendCommunityData } from '../../store/actions/community'
import flower from '../../assets/image.jpg'

class Edit extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      file: '',
      imagePreviewUrl: '',
      location: '',
      amount: '',
      details: '',
      submitted: 'false'
    }
    this.handleFileChange = this.handleFileChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.cleanSlate = this.cleanSlate.bind(this)
    this.updateState = this.updateState.bind(this)
    this.close = this.close.bind(this)
    this.clsBtn = React.createRef();
    this.fileRef = React.createRef();
  }

  updateState(communityData, id) {
    let data = communityData.data.find(comm => comm.id === id);
    this.setState({
      file: '',
      imagePreviewUrl: data.file_name,
      location: data.location,
      amount: data.amount,
      details: data.details
    })
  }

  cleanSlate() {
    this.setState({
      file: '',
      imagePreviewUrl: '',
      location: '',
      amount: '',
      details: '',
      submitted: 'true'
    })
  }

  handleFileChange(e) {
    let file = e.target.files[0];
    let picReader = new FileReader()
    picReader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: picReader.result
      });
    }
    picReader.readAsDataURL(file)
  }

  close() {
    this.clsBtn.current.style.display = "none";
    this.setState({submitted: 'false'})
  }

  handleChange(e) {
    this.setState(
      {
        [e.target.id]: e.target.value
      }
    )
  }

  componentDidMount() {
    let id = this.props.match.params.id * 1;
    let {  sendData, communityData } = this.props
    communityData = communityData.communityData;
    if (id) {
      if (!isNaN(id)) {
        // console.log('you mounted')
        if (communityData.length === 0) {
          sendData(id, 'get');
        }else{
          this.updateState(communityData, id)
        }
      } else {
        this.props.history.push('/community')
      }
    }
  }

  componentDidUpdate(prevProps) {
    let id = this.props.match.params.id * 1;
    let { loading, communityData } = this.props.communityData
    if (this.props !== prevProps) {
      if(loading === 'done' && communityData.submitted === 'true' && !id){
        // this.setState({submitted: 'true'})
        this.cleanSlate();
      }else if(loading === 'done' && communityData.submitted === 'true' && id) {
        this.props.history.push('/community')
      }
      if (!isNaN(id)) {
        if (loading === 'done') {
          // console.log('you updated')
          if (communityData.error) {
            if (communityData.error.error === "true") {
              this.props.history.push('/community')
            } else {
              this.updateState(communityData, id)
            }
          }
        }
      }
    }
  }


  handleSubmit(e) {
    e.preventDefault()
    let id = this.props.match.params.id * 1;
    let { sendData } = this.props;
    let { imagePreviewUrl, location, amount, details } = this.state;
    let formData = new FormData(e.target);
    if (id) {
      let { communityData } = this.props.communityData;
      let data = communityData.data.find(comm => comm.id === id);
      if ((data.file_name === imagePreviewUrl) && (data.location === location) && (data.amount === amount) && (data.details === details)) {
        console.log('please type something')
        return null
      } else {
        formData.append('type', 'update');
        formData.append('id', id);
        sendData(formData,'post')
      }
    } else {
      if (this.fileRef.current.files.length === 0) {
        console.log('no file detected')
        return null
      } else {
        formData.append('type', 'insert')
        sendData(formData,'post')
      }
    }
  }

  render() {
    let { location, amount, details, imagePreviewUrl, submitted} = this.state
    let { loading, error, errorMessage, communityData } = this.props.communityData
    console.log(this.props.communityData)
    console.log(submitted)
    let u = '';
    let f = '';
    if (loading === 'done' && submitted === 'true' ) {
      u = 'submit'; this.clsBtn.current.style.display = "block"; f = 'Data has been submitted successfully';
    } else {
      if (loading === 'true') { u = <div id="loader"></div> } else { u = 'submit'; }
    }
    error === 'true' && errorMessage !== '' ? (f = errorMessage) : (f = f)
    return (
      <React.Fragment>
        <Dashboard>
          <div className="notif" ref={this.clsBtn}>{f} <span onClick={this.close}>&#x274E;</span> </div>
          <form encType="multipart/form-data" method="post" onSubmit={this.handleSubmit}>
            <div className="community_container containerFull">
              <label htmlFor="file" className="file_label"> <img src={imagePreviewUrl} alt="" />
                <div className="bar_upload">
                  <span className="upload_icon straight"></span>
                  <span className="upload_icon slanting"></span>
                  <span className="upload_icon round"></span>
                </div>
              </label>
              <input type="file" id="file" name="file" className="file" accept="image/*" onChange={this.handleFileChange} ref={this.fileRef} />
              <div className="title">
                <label htmlFor="location"></label>
                <input type="text" id="location" name="location" className="title_input" value={location} onChange={this.handleChange} placeholder="Enter location here" required />
              </div>
              <hr className="hr" />
              <div className="amount_edit_cover">
                <label htmlFor="amount" className="amount_edit_label">Fund:</label>
                <span>&#8358;</span><input type="text" name="amount" id="amount" value={amount} className="amount_edit" onChange={this.handleChange} placeholder="Amount" required />
              </div>

              <textarea name="name" id="details" name="details" className="detail_textarea" value={details} onChange={this.handleChange} placeholder="Details here.     Press Enter key **TWICE(2)** to goto a new  paragraph" required>
              </textarea>
              <button type="submit" name="button" className="btn_donate btn edit"> {u} </button>
            </div>
          </form>
        </Dashboard>

      </React.Fragment>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    communityData: state.communityData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendData: (data, type) => dispatch(sendCommunityData(data, type))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Edit)