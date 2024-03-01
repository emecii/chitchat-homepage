import React from 'react';
import styled from 'styled-components';

const DemoSection = styled.section`
  height: 80vh;
  margin: 5px auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  position: relative;
  z-index: 10;
  border-radius: 20px;
  overflow: hidden;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px; // 根据需要调整高度，足以覆盖底部的文字
  background-color: #FFFFFF; // 遮挡元素的背景色，应与页面背景色匹配
  z-index: 20; // 确保遮挡元素位于iframe之上
  display: flex; // 使用flex布局使内容居中
  justify-content: center; // 水平居中
  align-items: center; // 垂直居中
  color: #000; // 文字颜色，根据需要调整
  font-size: 17px; // 文字大小，根据需要调整
`;

const DemoBlock = () => {
    return (
        <DemoSection>
            <StyledIframe 
                src="https://app.customgpt.ai/projects/20268/ask-me-anything?embed=1&shareable_slug=d9b06470b443ce2c0f0a499dab8fadec"
            ></StyledIframe>
            <Overlay>customchat-ai</Overlay> {/* 在Overlay中添加文字 */}
        </DemoSection>
    );
};

export default DemoBlock;
