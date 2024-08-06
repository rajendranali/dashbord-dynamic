// src/components/Dashboard.js
import React from 'react';
import styled from 'styled-components';
import { feedbackData, ordersData } from '../data/mockData';



const DashboardContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const StatCard = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatTitle = styled.h3`
  margin-bottom: 10px;
`;

const ActivityChart = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
`;

const RecentOrders = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
`;

const OrderTable = styled.table`
  width: 100%;
  color: #ffffff;
  border-collapse: collapse;

  th, td {
    padding: 10px;
    border-bottom: 1px solid #444;
  }
`;

const CustomerFeedback = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
`;

const FeedbackCard = styled.div`
  margin-bottom: 10px;
`;

const Dashboard = () => (
  <DashboardContainer>
    <StatsGrid>
      <StatCard>
        <StatTitle>Total Orders</StatTitle>
        <p>75</p>
      </StatCard>
      <StatCard>
        <StatTitle>Total Delivered</StatTitle>
        <p>70</p>
      </StatCard>
      <StatCard>
        <StatTitle>Total Cancelled</StatTitle>
        <p>5</p>
      </StatCard>
      <StatCard>
        <StatTitle>Total Revenue</StatTitle>
        <p>$12k</p>
      </StatCard>
    </StatsGrid>

    <ActivityChart>
      <h3>Activity</h3>
      {/* Add your chart component here */}
    </ActivityChart>

    <RecentOrders>
      <h3>Recent Orders</h3>
      <OrderTable>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map(order => (
            <tr key={order.orderNo}>
              <td>{order.customer}</td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </OrderTable>
    </RecentOrders>

    <CustomerFeedback>
      <h3>Customer's Feedback</h3>
      {feedbackData.map(feedback => (
        <FeedbackCard key={feedback.name}>
          <h4>{feedback.name}</h4>
          <p>{'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}</p>
          <p>{feedback.comment}</p>
        </FeedbackCard>
      ))}
    </CustomerFeedback>
  </DashboardContainer>
);

export default Dashboard;
