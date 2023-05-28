<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class campaign extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'tagline',
        'share_price',
        'valuation',
        'min_investment',
        'max_investment',
        'expected_rise',
        'duration_id',
        'returns_type_id',
        'short_bio',
        'reasons_to_invest',
        'fund_allocation',
        '	terms',
        'rewards',
        'team',
        "user_id",
        "product_id",
        "approved_status",
        "approve_loan",
        "note",
        "min_investment",
        "max_investment",
        "close_date",
        "fundriser_investment",
        "company_bio",
        "investment_planning",
        "status",
        "created_by",
        "created_at",
        "updated_by",
        "updated_at",
        "program_number",
        "version_number",
        "open_date",
        "net_sales",
        "net_sales_years",
        "net_profit",
        "net_profit_years",
        "cash_flow",
        "return_on_assets",
        "debt_of_assets",
        "fin_statement_year",
        "due_date",
        "APR",
        "info_Statement_date_G",
        "info_Statement_date_h",
        "financing_type",
        "fund_use",
        "financing_period",
        "obtain_finance_dt",
        "finance_repayment_dt"
    ];

}
