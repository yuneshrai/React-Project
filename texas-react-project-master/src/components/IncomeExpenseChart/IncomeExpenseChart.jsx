/**
 * IncomeExpenseChart - Simple bar chart for income vs expense by month.
 * Props: data (array of { month, income, expense }), loading
 */
import "./IncomeExpenseChart.css";

function IncomeExpenseChart({ data = [], loading }) {
  if (loading) {
    return (
      <div className="income-expense-chart">
        <div className="chart-loading">
          <span className="loading-spinner" aria-hidden="true" />
          <span>Loading chart...</span>
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="income-expense-chart">
        <div className="empty-state">
          <p>No chart data available.</p>
        </div>
      </div>
    );
  }

  const maxVal = Math.max(...data.flatMap((d) => [d.income, d.expense]), 1);

  return (
    <div className="income-expense-chart">
      <h3 className="chart-title">Income vs Expense</h3>
      <div className="chart-legend">
        <span className="chart-legend-item income">Income</span>
        <span className="chart-legend-item expense">Expense</span>
      </div>
      <div className="chart-bars">
        {data.map((item, i) => (
          <div key={i} className="chart-group">
            <span className="chart-month">{item.month}</span>
            <div className="chart-bar-row">
              <div
                className="chart-bar income"
                style={{ width: `${(item.income / maxVal) * 100}%` }}
                title={`Income: Rs. ${item.income.toLocaleString()}`}
              />
              <div
                className="chart-bar expense"
                style={{ width: `${(item.expense / maxVal) * 100}%` }}
                title={`Expense: Rs. ${item.expense.toLocaleString()}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IncomeExpenseChart;
