import React from 'react'
import ActivityCard from '../../components/ActivityCard'

import DashboardLayout from './../../layouts/dashboardLayout/DashboardLayout';

const DashboardScreen = () => {
  return (
    <DashboardLayout>
      <ActivityCard />
    </DashboardLayout>  
  )
}

export default DashboardScreen