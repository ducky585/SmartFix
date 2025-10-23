/*
  # Create bookings table for repair appointments

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key) - Unique booking identifier
      - `name` (text) - Customer name
      - `email` (text) - Customer email address
      - `phone` (text) - Customer phone number
      - `device_brand` (text) - Phone brand (Apple, Samsung, etc.)
      - `device_model` (text) - Specific phone model
      - `repair_type` (text) - Type of repair needed
      - `preferred_date` (text) - Preferred appointment date
      - `message` (text, optional) - Additional details from customer
      - `status` (text) - Booking status (pending, confirmed, completed, cancelled)
      - `created_at` (timestamptz) - When booking was created

  2. Security
    - Enable RLS on `bookings` table
    - Add policy for public to insert bookings (contact form)
    - Add policy for authenticated admins to view all bookings
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  device_brand text NOT NULL,
  device_model text NOT NULL,
  repair_type text NOT NULL,
  preferred_date text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create a booking"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);