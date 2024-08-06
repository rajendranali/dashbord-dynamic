import React, { useState } from 'react';
import styled from 'styled-components';
import { feedbackData, ordersData, goalData, menuData } from '../data/mockData';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement, DoughnutController } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { FaBox, FaDollarSign, FaCheckCircle, FaTimesCircle, FaChartBar, FaStar } from 'react-icons/fa';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement, DoughnutController);

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: ${props => props.theme.colors.background};
`;

const MainContent = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  flex: 1;
`;

const Section = styled.div`
  flex: ${props => props.flex || 1}; /* Default flex is 1, can be overridden */
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
`;

const StatCard = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  padding: 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StatTitle = styled.h3`
  margin: 0;
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  font-weight: 500;
`;

const StatValue = styled.p`
  font-size: 24px;
  color: ${props => props.theme.colors.text};
  font-weight: bold;
`;

const ActivityChart = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  height: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const RecentOrders = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top:10px
`;

const OrderTable = styled.table`
  width: 100%;
  color: ${props => props.theme.colors.text};
  border-collapse: collapse;

  th, td {
    padding: 12px;
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }

  th {
    background-color: ${props => props.theme.colors.headerBackground};
    color: ${props => props.theme.colors.headerText};
    text-align: left;
  }

  td {
    text-align: left;
  }
`;

const FeedbackSection = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const FeedbackCard = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  padding: 15px;
  background-color: ${props => props.theme.colors.feedbackCardBackground};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.feedbackCardHoverBackground};
  }
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
  border: 2px solid ${props => props.theme.colors.border};
`;

const FeedbackContent = styled.div`
  color: ${props => props.theme.colors.text};
  flex: 1;
`;

const FeedbackName = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

const FeedbackRating = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: ${props => props.theme.colors.text};
`;

const Star = styled.span`
  color: ${props => (props.filled ? 'yellow' : '#E0E0E0')};
  font-size: 18px;
`;

const NetProfitCard = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PercentageCircleWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`;

const PercentageCircle = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PercentageText = styled.p`
  position: absolute;
  font-size: 16px;
  color: ${props => props.theme.colors.text};
  font-weight: bold;
  margin: 0;
`;

const ExpandableSection = styled.div`
  margin-top: 20px;
  background-color: ${props => props.theme.colors.cardBackground};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ExpandButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 10px;
  width: 100%;
  text-align: left;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ExpandContent = styled.div`
  margin-top: 10px;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.cardHoverBackground};
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const CardName = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

const CardDescription = styled.p`
  margin: 5px 0;
  font-size: 14px;
`;

const Dashboard = () => {
  const [showGoals, setShowGoals] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showFamousDish, setShowFamousDish] = useState(false);

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

  const netProfit = 75; // Example percentage
  const totalProfitGoal = 100; // Example goal
  const percentage = (netProfit / totalProfitGoal) * 100;

  const doughnutData = {
    labels: ['Net Profit'],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ['#5F63F2', '#E0E0E0'],
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <DashboardContainer>
      <MainContent>
        <Section flex={2}>
          <StatsGrid>
            <StatCard>
              <FaBox size={24} />
              <div>
                <StatTitle>Total Orders</StatTitle>
                <StatValue>75</StatValue>
              </div>
            </StatCard>
            <StatCard>
              <FaCheckCircle size={24} />
              <div>
                <StatTitle>Total Delivered</StatTitle>
                <StatValue>70</StatValue>
              </div>
            </StatCard>
            <StatCard>
              <FaTimesCircle size={24} />
              <div>
                <StatTitle>Total Cancelled</StatTitle>
                <StatValue>5</StatValue>
              </div>
            </StatCard>
            <StatCard>
              <FaDollarSign size={24} />
              <div>
                <StatTitle>Total Revenue</StatTitle>
                <StatValue>$12k</StatValue>
              </div>
            </StatCard>
          </StatsGrid>

          <ActivityChart>
            <Bar data={activityData} />
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
        </Section>

        <Section flex={1}>
          <NetProfitCard>
            <StatTitle>Net Profit</StatTitle>
            <PercentageCircleWrapper>
              <PercentageCircle>
                <Doughnut data={doughnutData} options={doughnutOptions} />
                <PercentageText>{Math.round(percentage)}%</PercentageText>
              </PercentageCircle>
            </PercentageCircleWrapper>
            <StatValue>${netProfit}k</StatValue>
          </NetProfitCard>

          <ExpandableSection>
            <ExpandButton onClick={() => setShowGoals(!showGoals)}>
              <FaChartBar size={20} /> Goals
            </ExpandButton>
            {showGoals && (
              <ExpandContent>
                <ContentGrid>
                  {goalData.map(goal => (
                    <Card key={goal.title}>
                      <CardName>{goal.title}</CardName>
                      <CardDescription>{goal.description}</CardDescription>
                    </Card>
                  ))}
                </ContentGrid>
              </ExpandContent>
            )}
          </ExpandableSection>

          <ExpandableSection>
            <ExpandButton onClick={() => setShowMenu(!showMenu)}>
              <FaChartBar size={20} /> Menu
            </ExpandButton>
            {showMenu && (
              <ExpandContent>
                <ContentGrid>
                  {menuData.map(dish => (
                    <Card key={dish.name}>
                      <CardImage src={dish.image} alt={dish.name} />
                      <CardName>{dish.name}</CardName>
                      <CardDescription>{dish.description}</CardDescription>
                      <CardDescription>Price: {dish.price}</CardDescription>
                    </Card>
                  ))}
                </ContentGrid>
              </ExpandContent>
            )}
          </ExpandableSection>

          <ExpandableSection>
            <ExpandButton onClick={() => setShowFamousDish(!showFamousDish)}>
              <FaChartBar size={20} /> Famous Dish
            </ExpandButton>
            {showFamousDish && (
              <ExpandContent>
                <ContentGrid>
                  {menuData.filter(dish => dish.isFamous).map(dish => (
                    <Card key={dish.name}>
                      <CardImage src={dish.image} alt={dish.name} />
                      <CardName>{dish.name}</CardName>
                      <CardDescription>{dish.description}</CardDescription>
                      <CardDescription>Price: {dish.price}</CardDescription>
                    </Card>
                  ))}
                </ContentGrid>
              </ExpandContent>
            )}
          </ExpandableSection>

          <FeedbackSection>
            <h3>Customer's Feedback</h3>
            {feedbackData.map(feedback => (
              <FeedbackCard key={feedback.name}>
                <Avatar src={feedback.avatar} alt={feedback.name} />
                <FeedbackContent>
                  <FeedbackName>{feedback.name}</FeedbackName>
                  <FeedbackRating>
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} filled={index < feedback.rating}>
                        <FaStar />
                      </Star>
                    ))}
                  </FeedbackRating>
                  <p>{feedback.comment}</p>
                </FeedbackContent>
              </FeedbackCard>
            ))}
          </FeedbackSection>
        </Section>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
