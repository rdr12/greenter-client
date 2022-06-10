import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import { editProfileService, getProfileService, uploadService } from "../../services/profile.services"

function ProfileEdit() {
  const [ name, setName ] = useState(null);
  const [ email, setEmail ] = useState(null);
  const [ image, setImage ] = useState();
  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  useEffect(() => {
    getUserData()
    // eslint-disable-next-line
  }, []);

  const getUserData = async () => {
    try {
      const response = await getProfileService()
      setName(response.data.name)
      setEmail(response.data.email)
      setImage(response.data.profilePic)

    } catch (error) {
      navigate("/error")
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userUpdate = {
      name,
      email,
      image
    };

    try {
      await editProfileService(userUpdate)
      navigate("/profile");
    } catch (err) {
      navigate("error");
    }
  }

  const handleImageChange = async(e) => {
    const uploadForm = new FormData();
    uploadForm.append("image", e.target.files[0]);

    try {
      const response = await uploadService(uploadForm)
      setImage(response.data);

    } catch {
      navigate("/error");
    }
  }

  return (
    <div classname="container">
      <div class="row d-flex justify-content-center">
        <div class="col-sm-6">
          <div className="form mt-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="name"
                    name="name"
                    value={name}
                    className="form-control"
                    onChange={handleNameChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    className="form-control"
                    onChange={handleEmailChange}
                  />
                </div>
                <div class="mt-3">
                  <label htmlFor="profilePic" class="form-label">Imagen</label>
                  <input
                    type="file"
                    class="form-control-file"
                    name="profilePic"
                    id="profilePic"
                    onChange={handleImageChange}
                  />
                </div>

                <button className="btn btn-primary mt-1" type="submit">Update</button>
            </form>
            <img src={image} alt="profile-pic" width={100}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileEdit;