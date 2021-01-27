import { shallow } from "enzyme";
import { GiphyGridItem } from "../../components/GiphyGridItem";
import { getGifs } from "../../helpers/getGifs";

describe("Testing <GiphyGridItem/> in GiphyGridItem.js file ", () => {
  test("Rendering correctly without props passed in", () => {
    const category = "Trees";
    const imgs = getGifs(category);
    const wrapper = shallow(<GiphyGridItem />);

    expect(wrapper).toMatchSnapshot();
  });
  test("Rendering correctly with 'title' and 'url' props passed in", () => {
    // const testTitle = "Rick";
    const testTitle = 1;
    const testUrl =
      "https://media2.giphy.com/media/SsZViiaRCjgp8fVexU/giphy.gif?cid=79d2ed22nvb0imbtongho7ze8m3bb0xr4vxg596hw32capfq&rid=giphy.gif";
    const wrapper = shallow(<GiphyGridItem title={testTitle} url={testUrl} />);

    expect(wrapper).toMatchSnapshot();
  });
});
