import "./content.css";
import Footer from "../footer/footer";
function Content() {
  return (
    <div className="content-block">
      <div className="content-contain">
        <div className="content-img">
          <img
            className="content-img-title"
            src={require("../../assets/title.png")}
          />
        </div>
        <div className="content-intro">
          <div className="content-intro-contain">
            <div className="content-intro-title">
              Lorem ipsum dolor sit asmet?
            </div>
            <div className="content-intro-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu. Donec vulputate
              odio neque, sed semper turpis pellentesque a.
            </div>
          </div>
        </div>
        <div className="content-list">
          <div className="content-items row">
            <div className="content-item column">
              <div className="content-item-title">
                Lorem ipsum dolor sit amet
              </div>
              <div className="content-item-img">
                <img
                  className="content-item-img square"
                  src={require("../../assets/content1.png")}
                />
              </div>
              <span className="content-item-des">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </span>
            </div>
           
            <div className="content-item column">
              <div className="content-item-title">
                Lorem ipsum dolor sit amet
              </div>
              <div className="content-item-img">
                <img
                  className="content-item-img square"
                  src={require("../../assets/content2.png")}
                />
              </div>
              <span className="content-item-des">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </span>
            </div>
            <div className="content-item column">
              <div className="content-item-title">
                Lorem ipsum dolor sit amet
              </div>
              <div className="content-item-img">
                <img
                  className="content-item-img square"
                  src={require("../../assets/content3.png")}
                />
              </div>
              <span className="content-item-des">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </span>
            </div>
          </div>
        </div>
         <div>
        <Footer/>
      </div>
      </div>
     
    </div>
  );
}
export default Content;
