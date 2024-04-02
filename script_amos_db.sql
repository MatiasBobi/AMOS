-- DROP SCHEMA public;

CREATE SCHEMA public AUTHORIZATION pg_database_owner;

drop table lst  cascade

CREATE TABLE "company" (
  "company_id" serial PRIMARY KEY,
  "name" varchar(64),
  "country_id" smallint,
  "adress" varchar(40),
  "phone_number" varchar(20),
  "social_media" varchar(40),
  "contact_phone" varchar(20),
  "contact_name" varchar(40),
  "company_identification" varchar(20),
  "company_tax_number" varchar(20)
);

CREATE TABLE "country" (
  "country_id" serial PRIMARY KEY,
  "name" varchar(40)
);

CREATE TABLE "systems" (
  "system_id" serial PRIMARY KEY,
  "name" varchar(40),
  "acronym" varchar(10),
  "description" text,
  "path_data" varchar(150)
);

CREATE TABLE "lst" (
  "lst_id" serial PRIMARY KEY,
  "name" varchar(40),
  "acronym" varchar(10),
  "description" text
);

CREATE TABLE "customers" (
  "client_id" serial PRIMARY KEY,
  "name" varchar(30),
  "country_id" smallint,
  "client_adress" varchar(40),
  "phone" varchar(30),
  "social_media" varchar(30),
  "phone_contact" varchar(20),
  "customer_image" varchar(100)
);

CREATE TABLE "customer_manager" (
  "customermanager_id" serial PRIMARY KEY,
  "name" varchar(40),
  "phone_contact" varchar(20),
  "social_media" varchar(30),
  "position" varchar(32),
  "id_number" integer
);

CREATE TABLE "services_manager" (
  "servicesmanager_id" serial PRIMARY KEY,
  "name" varchar(40),
  "phone_contact" varchar(20),
  "social_media" varchar(30),
  "position" varchar(32),
  "id_number" integer
);

CREATE TABLE "well_comments" (
  "well_id" serial PRIMARY KEY,
  "comment_title" varchar(80),
  "description" text,
  "publication_date" timestamp,
  "user_publication" varchar(255),
  "files_path" varchar(255)
);

CREATE TABLE "wells" (
  "well_id" serial PRIMARY KEY,
  "well_name" varchar(10),
  "lst_id" integer,
  "inter_behaivor" integer,
  "strokes" integer,
  "api_gravity" integer,
  "formation_depth_md" real,
  "formation_depth_tvd" real,
  "pump_depth_md" real,
  "pump_depth_tvd" real,
  "inside_casing_diameter" real,
  "outer_tubing__diameter" real,
  "esp_factor" real,
  "spec_water_gravity" real,
  "gas_gravity" real,
  "oil_gradient" real,
  "effective_oil_fraction" real,
  "offset_method" real,
  "offset_value" real,
  "bubble_pressure" real,
  "reservoir_pressure" real,
  "separator_pressure" real,
  "separator_temp" real,
  "gor" real,
  "q_total_liquid" real,
  "pump_intake_temp" real,
  "bhs_p_intake_pressure" real,
  "bhs_p_intake_temp" real,
  "water_sediments" integer,
  "water_sediment_percentage" real,
  "daily_net_prod" real
);

CREATE TABLE "check_lists" (
  "checklist_id" serial PRIMARY KEY,
  "well_id" integer UNIQUE NOT NULL,
  "parameters_check" varchar(40),
  "date_time" timestamp,
  "team_amos_number" varchar(10),
  "start_date_amos" timestamp,
  "accumulated_days" integer,
  "last_date_stoppage" timestamp,
  "cause_stoppage" varchar(150),
  "flowmeter_r" real,
  "bg_sensor_vdf_reading" real,
  "manometer_thp_reading" real,
  "pressure_gauge_amos_head_r" real,
  "lasthour_sol_piston_maintenance_d" timestamp,
  "preassure_gauge_in_discharge_r" real,
  "internal_temperature_r" real
);

CREATE TABLE "ref_codes" (
  "code_id" serial PRIMARY KEY,
  "code_name" varchar(8),
  "code_description" varchar(128)
);

CREATE TABLE "amos_daily_operating_report" (
  "report_id" serial PRIMARY KEY,
  "well_id" integer UNIQUE NOT NULL,
  "field" varchar(40),
  "date_time" timestamp,
  "method" varchar(40),
  "client_id" integer UNIQUE,
  "servicesmanager_name" varchar(40),
  "servicesmanager_id" integer UNIQUE,
  "servicesmanager_id_number" integer,
  "customermanager_name" varchar(40),
  "customermanager_id" integer UNIQUE,
  "customermanager_id_number" integer,
  "files" varchar(255)
);

CREATE TABLE "operating_parameters" (
  "report_id" integer,
  "pumping_speed" real,
  "engine_torque" real,
  "amp_consumption" real,
  "hp_consumption" real,
  "n_openings" integer,
  "valve_opening_time" real,
  "valve_closing_time" real,
  "tubing_pressure" real,
  "line_temperature" real,
  "dynamic_level" real,
  "casing_pressure" real,
  "casing_temperature" real,
  "ays_sample" real,
  "observations" text
);

CREATE TABLE "internal_minutes" (
  "minute_id" serial PRIMARY KEY,
  "participants" varchar(150),
  "start_meet" timestamp,
  "end_meet" timestamp,
  "agenda" text,
  "next_meet" timestamp
);

CREATE TABLE "activities" (
  "activy_id" serial PRIMARY KEY,
  "participants" varchar(150),
  "minute_id" integer UNIQUE,
  "type_of_minute" varchar(10),
  "start_date" timestamp,
  "completed" boolean,
  "observations" text
);

CREATE TABLE "client_minutes" (
  "minute_id" serial PRIMARY KEY,
  "client_id" integer UNIQUE,
  "meet_date" timestamp,
  "location" varchar(100),
  "client_company" varchar(100),
  "start_meet" timestamp,
  "end_meet" timestamp,
  "attendance" varchar(255),
  "agenda" text,
  "next_meeting" timestamp
);

CREATE TABLE "attendance_client" (
  "name" varchar(100),
  "minute_id" integer,
  "company" varchar(50)
);

CREATE TABLE "attendance_ioisytem" (
  "name" varchar(100),
  "minute_id" integer
);

CREATE TABLE "decision_made" (
  "minute_id" integer,
  "description" text
);

CREATE TABLE "post_actions" (
  "minute_id" integer,
  "description" text,
  "action_to" varchar(150),
  "deadline" timestamp
);

CREATE TABLE "internal_minute_post_actions" (
  "minute_id" serial PRIMARY KEY,
  "description" text,
  "action_to_id" integer,
  "deadline" timestamp
);

CREATE TABLE "internal_minute_decision_made" (
  "minute_id" integer,
  "description" text
);

CREATE TABLE "watersediments_tests" (
  "test_id" serial PRIMARY KEY,
  "well_id" integer,
  "test_date" timestamp,
  "test_hour" timestamp,
  "sample_number" integer,
  "edo_valve" varchar(10),
  "total_volume" integer,
  "water_volume" integer,
  "crude_volume" integer,
  "ays_emulsion" decimal(2,1),
  "ays_form" decimal(4,2),
  "ays_form_avg" decimal(4,2),
  "observations" varchar(100),
  "water_cut_before_well_amos_avg" varchar(100)
);

CREATE TABLE "cylinder_tank_test" (
  "test_id" serial PRIMARY KEY,
  "diameter" integer,
  "radius" integer,
  "lenght" integer,
  "capacity" integer,
  "test_date" timestamp,
  "test_duration" integer
);

CREATE TABLE "cylinder_tank_test_data" (
  "test_id" integer,
  "test_hour" timestamp,
  "hours" integer,
  "height" real,
  "volume" real,
  "differential" real,
  "production_m3" real,
  "production_barrel" real
);

CREATE TABLE "cylinder_tank_test_seasonal" (
  "test_id" serial PRIMARY KEY,
  "production_m3" real,
  "production_barrel" real,
  "total_production" real
);

CREATE TABLE "data_files" (
  "well_id" integer UNIQUE,
  "system_id" integer UNIQUE,
  "time" timestamp,
  "casing_pressure" real,
  "casing_temperature" real,
  "line_pressure" real,
  "line_temperature" real,
  "enclosure_temperature" real,
  "acoustic_velocity" real,
  "PWF" real,
  "PIP" real,
  "DLF" real,
  "FGL" real,
  "TGL" real,
  "dPC" real,
  "Fo" real,
  "PAYS" real,
  "Qg" real,
  "level_file" varchar(32),
  "remarks_warnings" varchar(255)
);

CREATE TABLE "discharge" (
  "well_id" integer UNIQUE,
  "date_time" timestamp,
  "casing_pressure" real,
  "casing_temperature" real,
  "mode" integer,
  "discharges" smallint,
  "open_time_solenoid" real,
  "open_time_proportional_control" real,
  "control_gap_time" real,
  "delta_time" timestamp,
  "delta_pressure" real
);

COMMENT ON TABLE "lst" IS 'Lift System Type';

ALTER TABLE "customers" ADD FOREIGN KEY ("client_id") REFERENCES "company" ("company_id");

ALTER TABLE "company" ADD FOREIGN KEY ("country_id") REFERENCES "country" ("country_id");

ALTER TABLE "wells" ADD FOREIGN KEY ("well_id") REFERENCES "lst" ("lst_id");

ALTER TABLE "well_comments" ADD FOREIGN KEY ("well_id") REFERENCES "wells" ("well_id");

ALTER TABLE "check_lists" ADD FOREIGN KEY ("well_id") REFERENCES "wells" ("well_id");

ALTER TABLE "amos_daily_operating_report" ADD FOREIGN KEY ("well_id") REFERENCES "wells" ("well_id");

ALTER TABLE "operating_parameters" ADD FOREIGN KEY ("report_id") REFERENCES "amos_daily_operating_report" ("report_id");

ALTER TABLE "services_manager" ADD FOREIGN KEY ("servicesmanager_id") REFERENCES "amos_daily_operating_report" ("servicesmanager_id");

ALTER TABLE "customer_manager" ADD FOREIGN KEY ("customermanager_id") REFERENCES "amos_daily_operating_report" ("customermanager_id");

ALTER TABLE "client_minutes" ADD FOREIGN KEY ("minute_id") REFERENCES "activities" ("minute_id");

ALTER TABLE "internal_minutes" ADD FOREIGN KEY ("minute_id") REFERENCES "activities" ("minute_id");

ALTER TABLE "watersediments_tests" ADD FOREIGN KEY ("well_id") REFERENCES "wells" ("well_id");

ALTER TABLE "decision_made" ADD FOREIGN KEY ("minute_id") REFERENCES "client_minutes" ("minute_id");

ALTER TABLE "post_actions" ADD FOREIGN KEY ("minute_id") REFERENCES "client_minutes" ("minute_id");

ALTER TABLE "attendance_client" ADD FOREIGN KEY ("minute_id") REFERENCES "client_minutes" ("minute_id");

ALTER TABLE "attendance_ioisytem" ADD FOREIGN KEY ("minute_id") REFERENCES "client_minutes" ("minute_id");

ALTER TABLE "internal_minute_decision_made" ADD FOREIGN KEY ("minute_id") REFERENCES "internal_minutes" ("minute_id");

ALTER TABLE "internal_minute_post_actions" ADD FOREIGN KEY ("minute_id") REFERENCES "internal_minutes" ("minute_id");

ALTER TABLE "data_files" ADD FOREIGN KEY ("well_id") REFERENCES "wells" ("well_id");

ALTER TABLE "data_files" ADD FOREIGN KEY ("system_id") REFERENCES "systems" ("system_id");

ALTER TABLE "cylinder_tank_test_data" ADD FOREIGN KEY ("test_id") REFERENCES "cylinder_tank_test" ("test_id");

ALTER TABLE "wells" ADD FOREIGN KEY ("well_id") REFERENCES "discharge" ("well_id");
