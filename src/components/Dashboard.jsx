import React from 'react';
import styled from 'styled-components';
import { feedbackData, ordersData, netProfitData, goalData, menuData } from '../data/mockData';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

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
  background-color: ${props => props.theme.colors.cardBackground};
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.active {
    background-color: ${props => props.theme.colors.activeCardBackground};
  }
`;

const StatTitle = styled.h3`
  margin-bottom: 10px;
  color: ${props => props.theme.colors.text};
`;

const StatValue = styled.p`
  font-size: 24px;
  color: ${props => props.theme.colors.text};
`;

const ActivityChart = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
`;

const MainContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-top: 20px;
`;

const RecentOrders = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  padding: 20px;
  border-radius: 8px;
`;

const OrderTable = styled.table`
  width: 100%;
  color: ${props => props.theme.colors.text};
  border-collapse: collapse;

  th, td {
    padding: 10px;
    border-bottom: 1px solid #444;
  }
`;

const FeedbackSection = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  padding: 20px;
  border-radius: 8px;
`;

const FeedbackCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #444;
  border-radius: 8px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const FeedbackContent = styled.div`
  color: ${props => props.theme.colors.text};
`;

const Dashboard = () => {
  const activityData = {
    labels: [5, 9, 11, 13, 15, 17, 19, 21, 23],
    datasets: [
      {
        label: 'Activity',
        data: [3000, 5000, 7000, 6000, 5000, 4000, 8000, 10000, 9000],
        backgroundColor: '#5F63F2',
        borderRadius: 8,
      },
    ],
  };

  return (
    <DashboardContainer>
      <StatsGrid>
        <StatCard>
          <StatTitle>Total Orders</StatTitle>
          <StatValue>75</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>Total Delivered</StatTitle>
          <StatValue>70</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>Total Cancelled</StatTitle>
          <StatValue>5</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>Total Revenue</StatTitle>
          <StatValue>$12k</StatValue>
        </StatCard>
      </StatsGrid>

      <ActivityChart>
        <h3>Activity</h3>
        <Bar data={activityData} />
      </ActivityChart>

      <MainContentGrid>
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
                  <td>
                    <Avatar src={order.avatar} alt={order.customer} />
                    {order.customer}
                  </td>
                  <td>{order.orderNo}</td>
                  <td>{order.amount}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </OrderTable>
        </RecentOrders>

        <FeedbackSection>
          <h3>Customer's Feedback</h3>
          {feedbackData.map(feedback => (
            <FeedbackCard key={feedback.name}>
              <Avatar src={feedback.avatar} alt={feedback.name} />
              <FeedbackContent>
                <h4>{feedback.name}</h4>
                <p>{'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}</p>
                <p>{feedback.comment}</p>
              </FeedbackContent>
            </FeedbackCard>
          ))}
        </FeedbackSection>
      </MainContentGrid>

      <MainContentGrid>
        <FeedbackSection>
          <h3>Net Profit</h3>
          {netProfitData.map(item => (
            <FeedbackCard key={item.month}>
              <FeedbackContent>
                <h4>{item.month}</h4>
                <p>Profit: {item.profit}</p>
              </FeedbackContent>
            </FeedbackCard>
          ))}
        </FeedbackSection>

        <FeedbackSection>
          <h3>Goals</h3>
          {goalData.map(goal => (
            <FeedbackCard key={goal.title}>
              <FeedbackContent>
                <h4>{goal.title}</h4>
                <p>{goal.description}</p>
              </FeedbackContent>
            </FeedbackCard>
          ))}
        </FeedbackSection>
      </MainContentGrid>

      <FeedbackSection>
        <h3>Dish and Menu</h3>
        {menuData.map(dish => (
          <FeedbackCard key={dish.name}>
            <Avatar src={dish.image} alt={dish.name} />
            <FeedbackContent>
              <h4>{dish.name}</h4>
              <p>{dish.description}</p>
              <p>Price: {dish.price}</p>
            </FeedbackContent>
          </FeedbackCard>
        ))}
      </FeedbackSection>
    </DashboardContainer>
  );
};

export default Dashboard;
