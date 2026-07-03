import './SystemHR.scss';

export default function SystemHR() {
  return (
    <div className="system-hr-page">
      <div className="page-header">
        <div className="header-titles">
          <div className="title-row">
            <h2>현장 인력 관리</h2>
            <span className="subtitle">On-site Staff Management</span>
          </div>
          <p className="description">일일 상하차 작업자(아르바이트 등) 출퇴근 및 스케줄</p>
        </div>
        <div className="header-actions">
          <button className="btn-outline">주간 스케줄 보기</button>
          <button className="btn-primary">신규 인력 등록</button>
        </div>
      </div>

      <div className="stats-cards">
        <div className="stat-card">
          <span className="stat-label">금일 배정 인원</span>
          <div className="stat-value"><strong>40</strong>명</div>
        </div>
        <div className="stat-card">
          <span className="stat-label">출근 완료</span>
          <div className="stat-value text-green"><strong>38</strong>명</div>
        </div>
        <div className="stat-card">
          <span className="stat-label">결근</span>
          <div className="stat-value text-red"><strong>1</strong>명</div>
        </div>
        <div className="stat-card">
          <span className="stat-label">지각</span>
          <div className="stat-value text-orange"><strong>1</strong>명</div>
        </div>
        <div className="stat-card">
          <span className="stat-label">근무 중</span>
          <div className="stat-value text-blue"><strong>38</strong>명</div>
        </div>
      </div>

      <div className="tabs-section">
        <button className="tab-item active">전체 인력 (40)</button>
        <button className="tab-item">하차반</button>
        <button className="tab-item">분류반</button>
        <button className="tab-item">상차반</button>
      </div>

      <div className="filter-section">
        <div className="filter-group">
          <span className="filter-label">근무 상태</span>
          <div className="filter-buttons">
            <button className="filter-btn active">전체</button>
            <button className="filter-btn">근무중</button>
            <button className="filter-btn">결근</button>
            <button className="filter-btn">지각</button>
            <button className="filter-btn">퇴근</button>
          </div>
        </div>
        <div className="search-box">
          <span className="search-label">검색</span>
          <input type="text" placeholder="이름으로 검색" />
        </div>
      </div>

      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>이름</th>
              <th>소속 반</th>
              <th>근무 시간</th>
              <th>출근 시각</th>
              <th>퇴근 시각</th>
              <th>근무 상태</th>
              <th>관리 액션</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>윤도현</strong></td>
              <td>하차반</td>
              <td>06:00 - 14:00</td>
              <td>05:58</td>
              <td>-</td>
              <td>
                <span className="status-badge green">
                  <span className="dot"></span> 근무중
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-action">스케줄 변경</button>
                  <button className="btn-action danger-light">결근 처리</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><strong>서지안</strong></td>
              <td>분류반</td>
              <td>06:00 - 14:00</td>
              <td>06:21</td>
              <td>-</td>
              <td>
                <span className="status-badge yellow">
                  <span className="dot"></span> 지각
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-action">스케줄 변경</button>
                  <button className="btn-action danger-light">결근 처리</button>
                </div>
              </td>
            </tr>
            <tr className="row-alert">
              <td><strong>한승우</strong></td>
              <td>상차반</td>
              <td>06:00 - 14:00</td>
              <td className="text-red">미출근</td>
              <td>-</td>
              <td>
                <span className="status-badge red">
                  <span className="dot"></span> 결근
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-action primary-light">대타 인력 배정</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><strong>백서윤</strong></td>
              <td>분류반</td>
              <td>06:00 - 14:00</td>
              <td>05:55</td>
              <td>-</td>
              <td>
                <span className="status-badge green">
                  <span className="dot"></span> 근무중
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-action">스케줄 변경</button>
                  <button className="btn-action danger-light">결근 처리</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><strong>조은우</strong></td>
              <td>하차반</td>
              <td>22:00 - 06:00</td>
              <td>21:59</td>
              <td>06:02</td>
              <td>
                <span className="status-badge grey">
                  <span className="dot"></span> 퇴근
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-action">근무 기록 보기</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="pagination-container">
          <span className="pagination-info">전체 40명 중 1-5명 표시</span>
          <div className="pagination">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">4</button>
            <button className="page-btn next">›</button>
          </div>
        </div>
      </div>

      <div className="footer-note">
        결근으로 처리된 인력은 [대타 인력 배정] 버튼을 통해 대체 인력 풀에서 즉시 배정할 수 있습니다.
      </div>
    </div>
  );
}
