import React from "react";

const FundTable = ({ data }) => {
  return (
    <div className="table-responsive">
      <table className="fund-table w-100">
        <thead>
          <tr>
            <th className="py-3 px-3 text-start fw-bold text-white">Plan</th>
            <th className="py-3 px-3 text-center fw-bold text-white">
              Installments + Bonus
            </th>
            <th className="py-3 px-3 text-end fw-bold text-white">
              Total Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Ensure 'data' is an array before mapping */}
          {data.map((scheme, index) => {
            
            // FIX: Check for scheme.duration_unit before accessing string methods
            let formattedUnit = "";
            if (scheme.duration_unit) {
              // Capitalize the first letter (e.g., 'month' -> 'Month')
              formattedUnit = scheme.duration_unit.charAt(0).toUpperCase() + scheme.duration_unit.slice(1);
            }

            // Calculate the total installment amount (for display)
            const installmentAmount = parseFloat(scheme.schemet_due_amount).toFixed(2);
            const bonusAmount = parseFloat(scheme.scheme_bonus).toFixed(2);

            // Format the middle column string using raw API field names
            const installmentsAndBonusText = `₹${installmentAmount} X ${
              scheme.duration
            } ${formattedUnit} + ₹${bonusAmount}`;

            return (
              <tr key={scheme.id || index} className="fund-row"> 
                {/* 1. Plan Name */}
                <td className="py-3 px-3 fw-medium text-dark">
                  {scheme.scheme_name}
                </td>
                {/* 2. Installments + Bonus */}
                <td className="py-3 px-3 text-center opacity-90 text-dark">
                  {installmentsAndBonusText}
                </td>
                {/* 3. Total Amount */}
                <td className="py-3 px-3 text-end fw-bold text-gold">
                  {/* Ensure amount is converted to float and formatted */}
                  ₹{parseFloat(scheme.scheme_maturtiy_amount).toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FundTable;