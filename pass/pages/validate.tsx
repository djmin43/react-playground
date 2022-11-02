import router, { useRouter } from "next/router";
import React, { useEffect } from "react";

const code = "imp10391932";

function ValidateUserPage() {
  useEffect(() => {
    // @ts-ignore
    const IMP = window.IMP;
    const container = IMP.init(code);
    IMP.certification(
      {
        // param
        // 주문 번호
        merchant_uid: "ORD20180131-0000011",
        // 모바일환경에서 popup:false(기본값) 인 경우 필수
        m_redirect_url: "https://naver.com",
        // PC환경에서는 popup 파라메터가 무시되고 항상 true 로 적용됨
        popup: false,
      },
      // @ts-ignore
      (rsp) => {
        // callback
        if (rsp.success) {
          // 인증 성공 시 로직,
          console.log("yes!");
          router.push("/success");
        } else {
          console.log("fail");
          // 인증 실패 시 로직,
        }
      }
    );
  }, []);
}

export default ValidateUserPage;