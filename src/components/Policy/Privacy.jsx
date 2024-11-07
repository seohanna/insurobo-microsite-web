import React from 'react'
import styled from 'styled-components';

function Privacy() {
  return (
    <Term>
      <h1>개인정보처리방침</h1>
        <div className="in-txt">
          ㈜인슈로보(이하 '회사'라 한다.)는 인슈로보 앱 서비스(이하 "서비스"라 한다.)를 제공함에 있어 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 "정보통신망법"이라 한다.),
          개인정보보호법, 인용정보 이용 및 보호에 관한 법률 등 개인정보 보호 법령을 철저히 준수하면 관련 법규에 의거한 개인정보취급방침을 다음과 같이 두고 있습니다.
          회사는 개인정보취급방침을 개정하는 경우 회사가 운영하는 사이트(이하 "사이트"라 한다.) 혹은 서비스의 공지사항(또는 개별공지)를 통해 공지할 것입니다.
        </div>
        <h2>1. 수집하는 개인정보의 항목과 이용목적</h2>
        <ol className="ol-type2">
          <li>1.1 회사는 회원가입, 고객상담, 각종 서비스 등 기본적인 서비스를 위한 필수정보와 고객 맞춤 서비스 제공을 위한 선택정보로 구분하여 아래와 같은 개인정보를 수집하고 있습니다. 수집한
              개인정보는 서비스 제공 기간 동안 보유합니다.
            <div className="tbl">
              <table>
                <colgroup>
                  <col style={{width: "15%"}} />
                  <col style={{width: "45%"}} />
                  <col style={{width: "40%"}} />
                </colgroup>
                <thead>
                  <tr>
                    <th>구분</th>
                    <th>수집항목</th>
                    <th>이용목적</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>필수<br />수집</th>
                    <td>이메일 주소, 비밀번호 또는 Facebook ID, Google ID, Kakao ID, Naver ID 등 가입을 위해 필요한 제휴 서비스 계정</td>
                    <td>
                      <ul className="dep3">
                        <li>서비스 제공을 위한 회원가입 및 관리</li>
                        <li>서비스 이용에 따른 민원사항 처리</li>
                      </ul>
                    </td>
                    </tr>
                    <tr>
                      <th>필수<br />수집</th>
                      <td>
                        SMS(MMS), 스마트폰 알림(푸시 알림), 고객의 수기 입력, 금융사(카드사/은행사/보험사/증권사 등) 또는 국세청 ID/비밀번호, 공인인증서 비밀번호 입력을 통해
                        수집하는 회원 보유 금융상품 정보(금융사,금융상품명, 수시입출금/대출/보험/펀드 등의 금융상품 종류, 계좌번호, 신용/체크카드 번호) 및 신용정보, 계좌 잔액, 입출금내역,
                        카드 결제 내역, 구매품목정보, 카드 이용한도, 단기카드대출 이용 내역 및 한도, 카드론 이용 내역 및 한도, 보유 카드포인트 내역, 대출 정보 등의 회원 금융 거래 정보
                      </td>
                      <td>
                        <ul className="dep3">
                          <li>보유금융상품과 거래내용 서비스 제공</li>
                          <li>자산관리와 재무계획 서비스 제공</li>
                          <li>개별 맞춤형 금융상품 비교와 추천 정보 제공</li>
                          <li>신용점수와 등급 등 고객 신용정보와 신용등급 관리를 위한 정보제공</li>
                          <li>안정적인 서비스 운영 및 제공을 위한 안전성 테스트 및 모니터링</li>
                          <li>기타 고객에게 유익하다고 판단되는 정보의 제공</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>필수<br />수집</th>
                      <td>이름, 생년월일, 성별, 내외국인 정보, 이동통신사 및 휴대폰번호, 아이핀 등을 통한 본인 인증시 수집되는 CI/DI값 등 회원 본인 확인을 위해 필요한 식별자 정보
                      </td>
                      <td> 본인 인증 및 확인</td>
                    </tr>
                    <tr>
                      <th>필수<br />수집</th>
                      <td>이름, 생년월일, 휴대폰번호, 이메일, 주소, 보험계약정보, 계약자, 피보험자, 결제정보, 건물정보 등의 고객 보험계약정보 세부내역</td>
                      <td>
                        <ul className="dep3">
                          <li>보험계약 조회</li>
                          <li>보험계약 유지와 관리</li>
                          <li>보험금청구 서비스 제공</li>
                          <li>민원처리 및 분쟁대응</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>필수<br />수집</th>
                      <td>이름, 상품 구매/취소/반품/교환/환불 정보, 수령인 정보, 결제 정보, 송장 정보, 은행계좌정보, 휴대폰번호, 신용카드정보, 현금영수증 정보</td>
                      <td>금융 및 금융 외 상품 주문, 결제 및 배송서비스 제공</td>
                    </tr>
                    <tr>
                      <th>필수<br />수집</th>
                      <td>이름, 생년월일, 성별, 이메일, 비밀번호, 휴대폰번호, 회사명(제휴사), 지점명, 지점주소, 직책 등 영업회원 및 제휴사 정보</td>
                      <td>
                        <ul className="dep3">
                          <li>영업회원을 위한 개별 서비스 정보제공</li>
                          <li>제휴사 실적 관리를 위한 정보제공</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>선택<br />수집</th>
                      <td>주거형태, 소득정보, 직장, 직종, 거주지역 등 통계학적 정보</td>
                      <td>
                        <ul className="dep3">
                          <li>이벤트, 뉴스레터, 매거진, 맞춤형 금융 혜택과 정보제공 등 서비스 이용성 증대를 위한 선택 수집</li>
                          <li>마케팅 활용</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li>1.2 회사는 비회원 주문일 때에도 본인 인증 및 확인, 보험계약 조회/유지/관리, 보험금청구, 민원처리 및 분쟁대응에 필요한 개인정보만을 요청합니다. 이때 해당 정보는 대금결제 및
                상품의 배송과 관련된 용도로 사용되며 그 밖의 용도로는 절대 사용되지 않습니다. 비회원으로 서비스를 이용할 때에는 회원에게만 적용되는 사항을 제외한 나머지 부분에 대해서는 회원과 동일하게
                개인정보처리방침이 적용됩니다.(개인정보 보유 및 이용기간 등)
              <div className="tbl">
                <table>
                  <colgroup>
                    <col style={{width: "15%"}} />
                    <col style={{width: "45%"}} />
                    <col style={{width: "40%"}} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>수집항목</th>
                      <th>이용목적</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th rowspan="2">필수<br />수집</th>
                      <td>이름, 생년월일, 성별, 내외국인 정보, 이동통신사 및 휴대폰번호, 아이핀 등을 통한 본인 인증시 수집되는 CI/DI값 등 회원 본인 확인을 위해 필요한 식별자 정보</td>
                      <td> 본인 인증 및 확인</td>
                    </tr>
                    <tr>
                      <td className="bl">이름, 생년월일, 휴대폰번호, 이메일, 주소, 보험계약정보, 계약자, 피보험자, 결제정보, 건물정보 등의 고객 보험계약정보 세부내역</td>
                      <td>
                        <ul className="dep3">
                          <li>보험계약 조회</li>
                          <li>보험계약 유지와 관리</li>
                          <li>보험금청구 서비스 제공</li>
                          <li>민원처리 및 분쟁대응</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li>1.3 서비스 이용 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.
              <ul className="dep2">
                <li>1.3.1 IP address, Cookies, 방문일시, 서비스 이용기록, 기기정보(디바이스, OS 등) 결제기록, 접속기록 등</li>
                <li>1.3.2 위의 정보들을 토대로 서비스 제공 계약의 이행, 요금 정산, 신규서비스를 위한 고객 통계자료, 마케팅, 고객대응 활동 등을 수행합니다. 다만, 이용자는 웹 브라우저의
                    옵션을 조정하여 모든 Cookies를 거부할 수 있습니다. 방법은 아래와 같습니다.
                  <ul className="dep3">
                    <li>[도구] -&#62; [인터넷옵션] 선택</li>
                    <li>[개인정보] 탭 선택</li>
                    <li>[개인정보 설정수준을 사용자 조정</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>
          <h2>2.개인정보 보유 및 이용 기간</h2>
          <ol className="ol-type2">
            <li>2.1 개인정보는 고객의 서비스의 이용 기간에만 활용되며, 회원 탈퇴시 지체없이 파기합니다. 단, 내부 방침에 의해 고객에게 개인정보 보관기간에 대해 별도의 동의를 얻은 경우, 또는
                법령에서 아래와 같이 일정 기간 정보보관 의무를 부과하는 경우에는 해당 기간 동안 개인정보를 안전하게 보관합니다.
              <ul className="dep2">
                <li>2.1.1 계약 또는 청약철회 등에 관한 기록보유 : 5년(전자상거래 등에서의 소지자보호에 관한 법률)</li>
                <li>2.1.2 대금 결제 및 재화 등의 공급에 관한 기록보유 : 3년(전자상거래 등에서의 소지자보호에 관한 법률)</li>
                <li>2.1.3 소비자 불만 또는 분쟁 처리에 관한 기록 보유 : 3년(전자상거래 등에서의 소비자보호에 관한 법률)</li>
                <li>2.1.4 본인확인에 관한 기록 보유 : 6개월(정보통신망 이용촉진 및 정보보호 등에 관한 법률)</li>
                <li>2.1.5 신용정보의 수집/처리 및 이용 등에 관한 기록 : 1년(신용정보의 이용 및 보호에 관한 법률)</li>
                <li>2.1.6 건당 1만원 이하의 전자금융거래 기록 : 1년(전자금융거래법)</li>
                <li>2.1.7 건당 1만원 초과의 전자금융거래 기록 : 5년(전자금융거래법)</li>
                <li>2.1.8 웹사이트와 모바일 어플리케이션 방문에 관한 기록 보유 : 3개월(통신비밀보호법)</li>
              </ul>
            </li>
            <li>2.2 불법 행위 방지를 위한 보유
              <div className="dep2">
                반복적인 회원 탈퇴와 재가입으로 경제적 이익 취득 등 불법적인 행위를 차단하기 위해 문제시되는 개인정보(회원 ID등)는 회원 탈퇴 후 1년간 보유할 수 있다.
              </div>
            </li>
          </ol>
          <h2>3.개인정보 파기 절차 및 방법</h2>
          <div className="in-txt">회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기하며 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적
              방법을 사용하여 삭제하며 문서 등 종이에 출력된 개인정보는 분쇄기로 파기합니다. 단, 관계 법령에 의한 사유에 해당하는 경우 일정기간 저장된 후 파기됩니다.</div>
          <h2>4.개인정보의 제3자 제공</h2>
          <div className="in-txt">필수적으로 필요한 경우 주의를 기울여 아래 대상자에게 개인정보를 제공합니다.</div>
          <ol className="ol-type2 h-top">
            <li>4.1 서비스 사용자
              <div className="type-in">회사의 서비스 사용 중 고객의 금융 소비내역 및 고객이 선택적으로 입력한 기타정보가 연결된 회원 간에 공개될 수 있습니다. 또한 고객이 상대방을
                  초대하거나 친구로 등록하는 경우, 설정에 따라 초대자 혹은 친구 식별을 위해 이름, 프로필 사진 일부 소비내역 정보가 피초대자에게 공개될 수 있습니다.</div>
            </li>
            <li>4.2 제휴사(영업회원)
              <div className="type-in">보다 나은 서비스를 제공하기 위해 고객의 개인정보를 제휴사(영업회원)에게 제공하거나 공유할 수 있습니다. 개인정보를 제휴사에게 공유할 경우에는 사전에
                고객에게 제휴사면(영업회원명)과 제공 또는 공유 정보, 사유, 공유 기간 등을 개별적으로 전자우편, SMS, 모바일 웹과 어플리케이션 등을 통하여 고지하고 동의를 구하는 절차를 거칩니다.
                고객께서 동의하지 않는 경우에는 제휴사(영업회원)에게 정보를 제공하거나 공유하지 않습니다. 제휴관계에 변화가 있거나 제휴관계가 종료될 시에도 같은 절차에 따라 고지하거나 동의를 구합니다.
              </div>
            </li>
            <li>4.3 회사는 서비스 제공을 위해 회원의 동의를 얻는 등 적극적이고 적법한 절차를 토하여 아래와 같이 개인정보를 제공할 수 있습니다.
              <div className="tbl">
                <table>
                  <colgroup>
                    <col style={{width: "25%"}} />
                    <col style={{width: "75%"}} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>제공받는자</th>
                      <td>영업회원</td>
                    </tr>
                    <tr>
                      <th>정보이용 목적</th>
                      <td>
                        <ul className="dep3">
                          <li>보험금 청구대행 </li>
                          <li>가입된 금융정보 조회 </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>제공 항목</th>
                      <td>
                        이름, 생년월일, 성별, 휴대폰번호, <br />
                        내외국인구분, 중복가입확인정보, <br />
                        본인확인정보, 보험계약정보, <br />
                        보험사고정보(사고일, 경위 등) <br />
                      </td>
                    </tr>
                    <tr>
                      <th>보유 기간</th>
                      <td>제공 동의 철회 전까지</td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tr>
                    <th>제공받는자</th>
                    <th>이용목적</th>
                    <th>제공하는 정보</th>
                    <th>제공기간</th>
                  </tr>
                  <tbody>
                    <tr>
                      <td>인카금융서비스㈜, 메트라이프금융서비스㈜, ㈜신한금융플러스, ㈜에이플러스에셋어드바이저보험대리점, 배달서비스공제조합, (주)어센틱금융그룹, 롯데손해보험, 한화금융서비스</td>
                      <td>증권전달, 보장내용안내, 보장분석, 기타보험서비스</td>
                      <td>개인식별정보</td>
                      <td>목적달성시까지</td>
                    </tr>
                    <tr>
                      <td>지엔터프라이즈㈜</td>
                      <td>소상공인 세금환급 서비스</td>
                      <td>개인식별정보</td>
                      <td>목적달성시까지</td>
                    </tr>
                    {/* <tr>
                      <td>㈜한성로하스</td>
                      <td>소상공인 생활서비스</td>
                      <td>개인식별정보</td>
                      <td>목적달성시까지</td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </li>
          </ol>
          <h2>5. 고객 및 법정대리인의 권리와 행사 방법</h2>
          <ol className="ol-type2">
            <li>5.1 개인정보의 열람 및 수정 요청
              <div className="type-in">
                고객 및 법정대리인은 언제든지 등록되어 있는 본인의 개인정보를 조회, 수정할 수 있습니다. 이용자는 개인정보의 조회, 수정을 위하여 서비스에 등록된 정보를 클릭하거나 설정 메뉴에 접근하여
                계정 정보 등 등록된 개인정보를 직접 열람하거나 수정할 수 있습니다.
              </div>
            </li>
            <li>5.2 개인정보의 삭제(회원탈퇴)
              <div className="type-in">
                고객이 회원탈퇴를 원하는 경우 개인정보관리담당자에게 서면 또는 이메일로 연락하시면 지체없이 조치를 취하겠습니다.
              </div>
            </li>
          </ol>
          <h2>6. 개인정보보호를 위한 기술 및 관리적 대책</h2>
          <ol className="ol-type2">
            <li>6.1 기술적 대책
              <div className="type-in">
                해킹 등의 외부침입에 대비하여 각 서버마다 침입차단시스템 등을 이용하여 보안에 만전을 기하고 있습니다. 이용자의 개인정보는 비밀번호에 의해 보호되며 중요한 데이터는 암호화 알고리즘에 의해
                보호되고 있습니다.
              </div>
            </li>
            <li>6.2 관리적 대책
              <ul className="dep2">
                <li>6.2.1 개인 정보 접근 권한을 최소한의 인원으로 제한
                  <div className="type-in">
                    회사는 개인정보관련 취급 직원을 담당자에 한정시키고 있으며 개인 정보에 접근을 위한 별도의 비밀번호를 부여하여 정기적으로 갱신하고 있습니다.
                  </div>
                </li>
                <li>6.2.2 개인정보 관리 관련 내부 교육 강화
                  <div className="type-in">
                    회사는 내부 직원에 대한 수시 교육을 통하여 회사의 개인정보취급방침의 준수를 항상 강조하고 있습니다. 또한 신규직원 채용시 정보보호서약서에 서명하게 함으로써 직원에 의한 정보유출을
                    사전에 방지하고 개인정보 취급방침에 대한 이행사항 및 직원 준수여부를 감시하기 위해 내부 절차를 마련하여 지속적으로 시행하고 있습니다.
                  </div>
                </li>
                <li>6.2.3 개인정보보호전담기구의 운영
                  <div className="type-in">
                    회사는 사내 개인정보보호전담기구 등을 통하여 회사의 개인정보취급방침의 이행사항 및 담당자의 준수여부를 확인하여 문제가 발견될 경우 즉시 수정하고 바로잡을 수 있도록 노력하고
                    있습니다.
                  </div>
                </li>
              </ul>
            </li>
          </ol>
          <h2>7. 고객의 권리와 의무</h2>
          <div className="in-txt">회사는 타인의 이메일 주소, Facebook 등 제휴업체 ID 또는 기타 개인정보를 도용하여 회원가입 한 자 또는 서비스를 이용한 자를 발견한 경우 지체없이 해당
            아이디에 대한 서비스 이용 정지 또는 회원탈퇴 등 필요한 조치를 취합니다.</div>
          <h2>8. 개인정보관리책임자 및 담당자 안내</h2>
          <ul className="ul-type">
            <li>회사는 고객의 개인정보 관련 문의사항 및 불만 처리 등을 위하여 아래와 같이 개인정보 관리 책임자 및 담당자를 지정하고 있습니다.
              <div className="tbl">
                <table>
                  <colgroup>
                    <col style={{width: "20%"}} />
                    <col style={{width: "40%"}} />
                    <col style={{width: "40%"}} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th></th>
                      <th>개인정보보호담당자</th>
                      <th>개인정보보호책임자</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>성명</th>
                      <td>김원석</td>
                      <td>서민</td>
                    </tr>
                    <tr>
                      <th>소속 및<br />직위</th>
                      <td>㈜인슈로보 이사</td>
                      <td>㈜인슈로보 대표</td>
                    </tr>
                    <tr>
                      <th>이메일</th>
                      <td>info@insurobo.co.kr</td>
                      <td>info@insurobo.co.kr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li>개인정보 침해에 대한 피해구제 또는 상담이 필요한 이용자께서는 아래 기관에 문의하여 주시기바랍니다.
              <div className="tbl">
                <table>
                  <colgroup>
                    <col style={{width: "30%"}} />
                    <col style={{width: "25%"}} />
                    <col style={{width: "45%"}} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>기관</th>
                      <th>연락처</th>
                      <th>홈페이지</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>개인정보<br />침해신고센터</td>
                      <td>(국번없이)<br />118</td>
                      <td><Text as='a' target="_blank" href="https://privacy.kisa.or.kr">https://privacy.kisa.or.kr</Text></td>
                      </tr>
                      <tr>
                        <td>개인정보분쟁조정위원회</td>
                        <td>1833-6972</td>
                        <td><Text as='a' target="_blank"  href="https://www.kopico.go.kr">https://www.kopico.go.kr</Text></td>
                      </tr>
                      <tr>
                        <td>대검찰청<br />사이버수사과</td>
                        <td>(국번없이)<br />1301</td>
                        <td><Text as='a' target="_blank" href='http://www.spo.go.kr'>http://www.spo.go.kr</Text></td>
                      </tr>
                      <tr>
                        <td>경찰청<br />사이버안전국</td>
                        <td>(국번없이)<br />182</td>
                        <td><Text as='a' target="_blank" href="http://cyberbureau.police.go.kr">http://cyberbureau.police.go.kr</Text>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
            </ul>
            <div className="in-txt h-top2">본 개인정보취급방침의 내용 추가, 삭제 및 수정이 있을 경우 개정 최소 7일 전에 서비스 내 '공지사항'을 통해 사전 고지할 것입니다. 개인정보의
            수집 및 활용, 제3자 제공 등과 같이 고객 권리의 중요한 변경이 있을 경우에는 최소 30일 전에 고지합니다.</div>
            <div className="in-txt">현 개인정보처리방침은 2020년 01월 01일부터 적용됩니다.
              <ul className="ul-type h-top">
                <li>공고 일자 : 2023년 12월 01일</li>
                <li>시행 일자 : 2023년 12월 01일</li>
              </ul>
            </div>
          </Term>
  )
}

export default Privacy;



const Term = styled.div`
  border: 1px solid #BEBEBE;
  padding: 2% 2%;

  > h1, h2, th, li {
    font-family: 'Roboto';
    color: #1A1A1A;
  }
  > ul {
    list-style: disc;
  }
  > h1 {
    font-size: 0.8rem;
    letter-spacing: -1px;
    text-align: center;
    padding-bottom: 1%;
    font-weight: 700;
  }
  h2 {
    font-size: 15px;
    padding: 30px 0 10px;
    font-weight: 700;
  }
  table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    table-layout: fixed;
    border: 1px solid #e0e0e0;
    border-bottom: 0;
    margin-top: 10px;
  }
  th {
    background: #f7f7f9;
    border-bottom: 1px solid #e0e0e0;
    border-left: 1px solid #e0e0e0;
    padding: 5px 10px;
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    display: table-cell;
    vertical-align: middle;
    color: #333;
  }
  td {
    font-size: 13px;
    border-bottom: 1px solid #e0e0e0;
    border-left: 1px solid #e0e0e0;
    padding: 10px;
  }
  .in-txt {
    font-size: 15px;
    padding-top: 5px;
  }
  .ol-type2 > li {
    position: relative;
    padding: 0 0 12px 5px;
    font-size: 15px;
    color: #1A1A1A;
  }
  .dep2 > li {
    position: relative;
    padding: 0 0 10px 5px;
  }
  .ul-type {
    list-style: none;
    > li {
      color: #808080;
      font-weight: 700;
      padding-top: 5px;
    }
  }
  .tbl {
    
  }  
  ${(props) => props.theme.window.tab} {
    padding-top: 2rem;
    
  }
`;

const Text = styled.p`
`;